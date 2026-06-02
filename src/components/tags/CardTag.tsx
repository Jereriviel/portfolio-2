import { Icon } from "@iconify/react";
import tagConfig from "../../utils/tagConfig";
import type { Tag } from "../../types/tag";

type TagProps = {
  tag: Tag;
};

const CardTag = ({ tag }: TagProps) => {
  const config = tagConfig[tag as keyof typeof tagConfig];
  if (!config) return null;

  return (
    <span className="tag tag_card">
      <Icon icon={config.icon} style={{ fontSize: "18px" }} />
      {tag}
    </span>
  );
};

export default CardTag;
