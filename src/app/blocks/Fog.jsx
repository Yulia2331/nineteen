import React, { useEffect, useRef} from 'react'
import * as THREE from 'three'
import FOG from 'vanta/dist/vanta.fog.min'

export default function Fog() {
    const vr = useRef(null);

    useEffect(() => {
        const  VantaEffect = FOG({
            el: vr.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 1200.00,
            minWidth: 200.00,
            highlightColor: 0x6dc4ff,
            midtoneColor: 0xea5edf,
            lowlightColor: 0x5e47c5,
            baseColor: 0xfcfcfc,
            speed: 2.40,
            zoom: 0.50
        });
        return () => {
            if(VantaEffect) VantaEffect.destroy();
        }
    }, [])

  return (
<div className="min-h-screen" ref={vr}></div>
    );
}