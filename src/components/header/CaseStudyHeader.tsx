import React from "react";

type CaseHeaderProps = {
	section: string;
	title: string;
	sectionNo: string;
};

const CaseStudyHeader = ({ section, title, sectionNo }: CaseHeaderProps) => {
	return (
		<div className="pt-5 pt-20  pb-10 mb-5 px-3 lg:px-28 border-dullBlack  border-b-[0.2px]">
			<div className="flex justify-between items-center">
				<div className="flex flex-col">
					<div className="flex  gap-3 items-end ">
						<div className="h-[2px] w-[100px] bg-gold "></div>
						<p className="uppercase font-bold text-xs md:text-md leading-[0px]">
							{section}
						</p>
					</div>
					<h2 className="text-4xl md:text-5xl text-white font-bold mt-3 md:mt-5">
						{title}
					</h2>
				</div>
				<div className="hidden md:block">
					<h1 className=" text-9xl font-bold text-stroke-white text-fill-transparent ">
						{sectionNo}
					</h1>
				</div>
			</div>
		</div>
	);
};

export default CaseStudyHeader;
