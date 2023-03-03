import React from "react";

type ProjectTagsProps = {
	title: string;
};
const ProjectTags = ({ title }: ProjectTagsProps) => {
	return (
		<p className=" bg-dullBlack text-black  py-3 px-8 rounded-full inline ">
			{title}
		</p>
	);
};

export default ProjectTags;
