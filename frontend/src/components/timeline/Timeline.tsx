import { TimelineNode } from './TimelineNode.tsx';
import { TimelineCaption } from './TimelineCaption.tsx';

interface TimelineItemData {
  year: string;
  size: 'small' | 'medium' | 'large' | 'xlarge';
  caption?: {
    date: string;
    title: string;
    description?: string;
    position?: 'top' | 'bottom';
  };
}

const timelineData: TimelineItemData[] = [
  {
    year: '2016',
    size: 'small',
    caption: {
      date: '16.03.02',
      title: 'CJ Entus',
      description: '우승의 시작, 막강',
      position: 'bottom'
    }
  },
  {
    year: '2017',
    size: 'xlarge',
    caption: {
      date: '17.03.02',
      title: 'KING-ZONE DragonX',
      description: '우승에 관련해서..',
      position: 'bottom'
    }
  },
  {
    year: '2018',
    size: 'large',
    caption: {
      date: '18.03.02',
      title: 'KING-ZONE DragonX',
      description: '우승에 관련해서..',
      position: 'bottom'
    }
  },
  {
    year: '2019',
    size: 'medium',
    caption: {
      date: '19.03.02',
      title: 'kt Rolster',
      description: '또 다른..',
      position: 'top'
    }
  },
  {
    year: '2020',
    size: 'xlarge',
    caption: {
      date: '20.03.02',
      title: 'Gen.G',
      description: '설명..',
      position: 'bottom'
    }
  },
  {
    year: '2021',
    size: 'large',
    caption: {
      date: '21.03.02',
      title: 'Gen.G',
      description: '설명..',
      position: 'bottom'
    }
  }
];

export function Timeline() {
  return (
    <div className="relative w-full overflow-x-auto overflow-y-hidden py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16">
      {/* Sparkle decoration */}
      <div className="absolute left-4 md:left-8 lg:left-16 bottom-8 md:bottom-12 z-10 scale-75 md:scale-100">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#sparkle-filter)">
            <path d="M28 0L29.6235 26.3765L56 28L29.6235 29.6235L28 56L26.3765 29.6235L0 28L26.3765 26.3765L28 0Z" fill="white"/>
          </g>
          <defs>
            <filter id="sparkle-filter" x="-14" y="-14" width="84" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="7"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0"/>
              <feBlend mode="plus-lighter" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
          </defs>
        </svg>
        <svg className="absolute left-12 -top-4" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#sparkle2-filter)">
            <path d="M9.5 0L10.0508 8.94916L19 9.5L10.0508 10.0508L9.5 19L8.94916 10.0508L0 9.5L8.94916 8.94916L9.5 0Z" fill="white"/>
          </g>
          <defs>
            <filter id="sparkle2-filter" x="-14" y="-14" width="47" height="47" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="7"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0"/>
              <feBlend mode="plus-lighter" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
          </defs>
        </svg>
        <div className="absolute -top-1 -right-1 w-0.5 h-0.5 bg-white rounded-full" />
      </div>

      {/* Timeline container with horizontal scroll */}
      <div className="relative flex items-center gap-0 min-w-max">
        {/* Horizontal line */}
        <div className="absolute left-0 right-0 h-[0.5px] bg-white" style={{ top: '50%' }} />
        
        {/* Timeline items */}
        {timelineData.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center justify-center" style={{ minWidth: '200px' }}>
            {/* Caption above (if position is top) */}
            {item.caption && item.caption.position === 'top' && (
              <div className="absolute" style={{ bottom: '60%', marginBottom: '20px' }}>
                <TimelineCaption {...item.caption} />
                {/* Connector line */}
                <svg className="absolute left-1/2 -translate-x-1/2" style={{ top: '100%' }} width="2" height="40" viewBox="0 0 2 40">
                  <line x1="1" y1="0" x2="1" y2="40" stroke="white" strokeWidth="0.5"/>
                </svg>
              </div>
            )}
            
            {/* Node */}
            <div className="relative z-10">
              <TimelineNode size={item.size} year={item.year} />
            </div>
            
            {/* Caption below (if position is bottom) */}
            {item.caption && item.caption.position === 'bottom' && (
              <div className="absolute" style={{ top: '60%', marginTop: '20px' }}>
                {/* Connector line */}
                <svg className="absolute left-1/2 -translate-x-1/2" style={{ bottom: '100%' }} width="2" height="40" viewBox="0 0 2 40">
                  <line x1="1" y1="0" x2="1" y2="40" stroke="white" strokeWidth="0.5"/>
                </svg>
                <TimelineCaption {...item.caption} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}