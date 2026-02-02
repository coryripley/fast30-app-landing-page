import imgRectangle1 from "figma:asset/8d6bc8d3467dab4d7b21eb04d9ca035cb37d0467.png";
import { imgRectangle } from "./svg-r9b1c";

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[44.02px_0.75px] mask-size-[52px_52px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[0.83%_28.87%_41.39%_32.61%]" data-name="Clip path group">
      <Group />
    </div>
  );
}

export default function Text() {
  return (
    <div className="relative size-full" data-name="TEXT">
      <ClipPathGroup />
    </div>
  );
}