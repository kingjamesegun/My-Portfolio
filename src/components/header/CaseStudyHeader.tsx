import React from "react";

const CaseStudyHeader = () => {
	return (
		<div className="pt-20  pb-10 mb-5 px-5 lg:px-28 border-dullBlack  border-b-[0.2px]">
			<div className="flex justify-between items-center">
				<div className="flex flex-col">
					<div className="flex  gap-3 items-end ">
						<div className="h-[2px] w-[100px] bg-gold "></div>
						<p className="uppercase font-bold leading-[0px]">CLIENT DETAILS</p>
					</div>
					<h2 className="text-5xl text-white font-bold mt-5">
						Understanding the project.
					</h2>
				</div>
				<div>
					<h1 className=" text-9xl font-bold text-stroke-white text-fill-transparent ">
						02
					</h1>
				</div>
			</div>
		</div>
	);
};

export default CaseStudyHeader;
