type ThumbnailProps = {
  src: string;
};

export default function Thumbnail({ src }: ThumbnailProps) {
  return (
    <img
      className="z-20 h-auto max-h-[300px] w-full max-w-[300px]"
      src={src}
      alt="flip"
    />
  );
}
