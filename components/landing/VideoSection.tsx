interface VideoSectionProps {
  heading?: string;
  videoSrc: string;
  videoTitle: string;
}

export default function VideoSection({
  heading = 'Guarda il video',
  videoSrc,
  videoTitle,
}: VideoSectionProps) {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-20">
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-gray-900 italic text-center">
          {heading}
        </h2>

        {/* Vertical 9:16 container — reel / shorts style, max 380px wide */}
        <div
          className="relative w-full rounded-[28px] overflow-hidden shadow-2xl shadow-black/15 bg-black"
          style={{ maxWidth: 380, aspectRatio: '9 / 16' }}
        >
          <iframe
            src={videoSrc}
            title={videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
