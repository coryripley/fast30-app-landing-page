import imgRectangle1 from "figma:asset/5d0add175148321d5c198c9408392c4abc973299.png";
import { imgRectangle } from "./svg-qngic";

function Group() {
  return (
    <div className="absolute contents inset-[0_-2.78%_-2.78%_0]" data-name="Group">
      <div className="absolute inset-[0_-2.78%_-2.78%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[13.82px_119.57px] mask-size-[386.44px_218.7px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[27.31%_8.58%_22.74%_3.16%]" data-name="Clip path group">
      <Group />
    </div>
  );
}

export default function Images() {
  return (
    <div className="relative size-full" data-name="IMAGES">
      <ClipPathGroup />
    </div>
  );
}