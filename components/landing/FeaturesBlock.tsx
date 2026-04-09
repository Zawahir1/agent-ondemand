import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
}

interface FeaturesBlockProps {
  heading: string;
  features: Feature[];
  imageSrc: string;
  imageAlt: string;
  // 'left'  → image subject on left,  glass card on RIGHT
  // 'right' → image subject on right, glass card on LEFT
  imagePosition?: 'left' | 'right';
}

export default function FeaturesBlock({
  heading,
  features,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
}: FeaturesBlockProps) {
  const cardOnLeft = imagePosition === 'right';

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-20">
      {/*
        Container has an explicit min-height so the glass card always has
        room regardless of the image's natural aspect ratio.
        The Image uses `fill` + object-cover for consistent cropping on all screens.
      */}
      <div className="relative w-full rounded-[40px] overflow-hidden shadow-xl shadow-black/10
        min-h-[420px] sm:min-h-[480px] md:min-h-[546px] lg:min-h-[630px]">

        {/* Background image — fills container, cropped to cover */}
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1400px"
          priority
        />

        {/* Glass card — stretched full height via absolute inset */}
        <div
          className={`absolute inset-y-0 ${
            cardOnLeft ? 'left-0' : 'right-0'
          } w-[55%] sm:w-[48%] md:w-[42%] lg:w-[38%] flex`}
        >
          <div
            className={`flex-1 m-5 md:m-8 rounded-[28px] flex flex-col justify-center p-7 md:p-10
              bg-white/80 backdrop-blur-xl
              shadow-[0_8px_40px_-4px_rgba(0,0,0,0.18)]
              border border-white/60`}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-tight mb-7">
              {heading}
            </h2>
            <ul className="flex flex-col gap-4">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-800 mt-[0.45rem]" />
                  <p className="text-gray-700 text-[0.95rem] leading-snug">
                    <span className="font-bold text-gray-900">{feature.title}</span>{' '}
                    <span className="font-normal text-gray-600">{feature.description}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
