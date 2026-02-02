import imgRectangle1 from "figma:asset/beec4ba6ac4eebd728b995c425b72de9b7d569ed.png";
import { imgRectangle } from "./svg-ou198";

function Group() {
  return (
    <div className="absolute contents inset-[0_14.99%_14.99%_0]" data-name="Group">
      <div className="absolute inset-[0_14.99%_14.99%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[17.31px_13.65px] mask-size-[52px_52px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[11.71%_10.59%_43.66%_22.33%]" data-name="Clip path group">
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