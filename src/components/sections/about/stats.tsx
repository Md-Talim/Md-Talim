import { SmileIcon, TerminalIcon } from "@/components/icons";
import { Reveal } from "@/components/utils";
import { Tag } from "@/components/utils/tag";
import { funStack, webStack } from "@/data/about";

export const Stats = () => (
  <div className="relative">
    <Reveal>
      <div>
        <h4 className="mb-6 flex items-center">
          <TerminalIcon />
          <span className="ml-2 font-bold">Web Stack</span>
        </h4>
        <div className="mb-12 flex flex-wrap gap-2">
          {webStack.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </Reveal>
    <Reveal>
      <div>
        <h4 className="mb-6 flex items-center">
          <SmileIcon />
          <span className="ml-2 font-bold">Use for Fun</span>
        </h4>
        <div className="mb-12 flex flex-wrap gap-2">
          {funStack.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </Reveal>
  </div>
);
