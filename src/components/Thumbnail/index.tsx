type ThumbnailProps = {
  src: string;
  onClick: (src: string) => void;
};

export default function Thumbnail({ src, onClick }: ThumbnailProps) {
  return (
    <img
      className="z-20 aspect-square w-full cursor-pointer object-cover"
      src={src}
      alt="flip"
      onClick={() => onClick(src)}
    />
  );
}
