import svgPaths from "./svg-sgoejc9fzb";
import imgRectangle1 from "figma:asset/a011ad6689eb378add47b27d904a5b11deedd1c1.png";
import { imgRectangle } from "./svg-9axlo";

function Group() {
  return (
    <div className="absolute contents inset-[0_14.79%_10.4%_3.72%]" data-name="Group">
      <div className="absolute inset-[0_14.79%_10.4%_3.72%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11.32px_20.5px] mask-size-[204.54px_204.54px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[8.35%_8.33%]" data-name="Clip path group">
      <Group />
    </div>
  );
}

export default function Images() {
  return (
    <div className="relative size-full" data-name="IMAGES">
      <div className="absolute inset-[0.02%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245.44 245.44">
          <path d={svgPaths.p36859c00} fill="var(--fill-0, #1A1A1A)" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup />
    </div>
  );
}