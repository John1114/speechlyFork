import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin, { Region } from 'wavesurfer.js/src/plugin/regions';
import TimelinePlugin from 'wavesurfer.js/src/plugin/timeline';
import { AudioRegionLabels, Classification } from './App';
import { ReactComponent as Play } from './assets/play.svg';
import { ReactComponent as Pause } from './assets/pause.svg';
import { ReactComponent as VolumeUp } from './assets/volume.svg';
import './Waveform.css';

interface Props {
  url?: string;
  peaks?: number[];
  regionData?: AudioRegionLabels[];
  children?: React.ReactNode;
}

const formWaveSurferOptions = (containerRef: any, timelineRef: any) => ({
  container: containerRef,
  waveColor: '#7d8fa1',
  progressColor: '#009efa',
  cursorColor: 'red',
  height: 100,
  barWidth: 2,
  barRadius: 3,
  barGap: 2,
  responsive: true,
  normalize: true,
  partialRender: true,
  plugins: [
    RegionsPlugin.create({ snapToGridInterval: 1, dragSelection: false }),
    TimelinePlugin.create({
      container: timelineRef,
      height: 16,
      notchPercentHeight: 50,
      primaryColor: '#516170',
      secondaryColor: '#516170',
      primaryFontColor: '#516170',
      secondaryFontColor: '#516170',
    }),
  ],
});

export const Waveform: React.FC<Props> = ({ url, peaks, regionData, children }) => {
  const waveformRef: { current: HTMLDivElement | null } = useRef(null);
  const timelineRef: { current: HTMLDivElement | null } = useRef(null);
  const wavesurfer: { current: WaveSurfer | null } = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [selectedData, setSelectedData] = useState<Classification[]>();

  useEffect(() => {
    const options = formWaveSurferOptions(waveformRef.current, timelineRef.current);
    wavesurfer.current = WaveSurfer.create(options);
    if (!url) {
      if (peaks?.length) {
        wavesurfer.current.load('foo', peaks, undefined, peaks.length / 128);
      }
    } else {
      wavesurfer.current.load(url);
    }

    wavesurfer.current.on('ready', () => {
      if (wavesurfer.current) {
        wavesurfer.current.setVolume(volume);
      }
    });

    wavesurfer.current.on('play', () => setIsPlaying(true));
    wavesurfer.current.on('pause', () => setIsPlaying(false));
    wavesurfer.current.on('volume', (e) => setVolume(e));

    const unassign = (data: any) => Object.values(data) as Classification[];

    wavesurfer.current?.on('region-in', (region: Region) => {
      const arr = unassign(region.data);
      setSelectedData(arr);
    });

    wavesurfer.current?.on('region-click', (region: Region, e: Event) => {
      e.stopPropagation();
      region.wavesurfer.play(region.start);
    });

    wavesurfer.current?.on('region-mouseenter', (region: Region) => {
      if (wavesurfer.current?.isPlaying()) return;
      const arr = unassign(region.data);
      setSelectedData(arr);
    });

    return () => wavesurfer.current?.destroy();

    // eslint-disable-next-line
  }, [url, peaks]);

  useEffect(() => {
    if (wavesurfer.current && regionData?.length) {
      wavesurfer.current.regions.clear();
      regionData.sort((a, b) => a.index - b.index);
      regionData.forEach(({ start, end, classifications }) => {
        const obj = Object.assign({}, classifications);
        const region = { start, end, data: { ...obj }, drag: false };
        wavesurfer.current?.regions.add(region);
      });
    }
  }, [url, regionData]);

  const handlePlayPause = () => {
    wavesurfer.current?.playPause();
  };

  const onVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const newVolume = +target.value;
    if (newVolume) {
      wavesurfer.current?.setVolume(newVolume || 1);
    }
  };

  return (
    <div className="Waveform">
      <div className="Waveform__data">
        {selectedData && (
          <>
            <span>Audio classification:</span>
            {selectedData.map(({ label, score }, i) => (
              <span key={`${label}-${i}`}>
                {label}: {(score * 100).toFixed(2)}%
              </span>
            ))}
          </>
        )}
      </div>
      <div className="Waveform__waveform" id="waveform" ref={waveformRef} />
      <div className="Waveform__timeline" id="timeline" ref={timelineRef} />
      <div className="Waveform__controls">
        {children}
        <button onClick={handlePlayPause} className="Waveform__playPause" disabled={!url}>
          {isPlaying ? <Pause width={28} height={28} /> : <Play width={28} height={28} />}
        </button>
        <div className="Waveform__volume">
          <VolumeUp />
          <input
            type="range"
            id="volume"
            name="volume"
            min="0.01"
            max="1"
            step=".025"
            onChange={onVolumeChange}
            defaultValue={volume}
          />
        </div>
      </div>
    </div>
  );
};
