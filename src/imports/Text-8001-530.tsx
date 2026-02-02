import imgText from "figma:asset/8d6bc8d3467dab4d7b21eb04d9ca035cb37d0467.png";

export default function Text() {
  return (
    <div className="relative size-full" data-name="TEXT">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgText} />
      </div>
    </div>
  );
}