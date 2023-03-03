import React from "react";

type QuoteProps = {
	text: string;
};

const Quote = ({ text }: QuoteProps) => {
	return (
		<div className="bg-[#1E1E1E] text-white w-full md:w-2/3 mx-auto py-10 px-5">
			<p className="font-bold ">{text}</p>
		</div>
	);
};

export default Quote;
