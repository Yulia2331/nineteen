import React, { useCallback, useEffect, useState, useRef } from 'react'
import Card from "../components/blockComponents/BlueCard";
import ExportedImage from "next-image-export-optimizer";
export default function WhenCome(props) {
    const [isVisible, setIsVisible] = useState(false);
                const ref = useRef(null);
              
                useEffect(() => {
                  const observer = new IntersectionObserver(
                    ([entry]) => {
                      if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target); // Остановить наблюдение
                      }
                    },
                    { threshold: 0.1 } // Срабатывает, когда видно 10% блока
                  );
              
                  if (ref.current) {
                    observer.observe(ref.current);
                  }
              
                  return () => {
                    if (ref.current) observer.unobserve(ref.current);
                  };
                }, []);
                console.log(props.cardCome)
  return (
    <div className={`fade-block ${isVisible ? 'visible' : ''}`}  ref={ref}>
    <div className="container">
        <div className="mb-20 md:mb-26">
            <div className="flex justify-center mb-10 lg:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-[-1] md:tracking-[-2]">Когда к нам приходят</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-3 lg:gap-5">
                    {props.cardCome.map((n, i) => ( 
                                                   <Card key={i} text={n.text} img={n.img}></Card>
                                                         ))
                                                            }
             
            </div>
        </div>
    </div>
    </div>
    );
}