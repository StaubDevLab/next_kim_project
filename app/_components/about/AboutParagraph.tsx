import Image from "next/image";

export function AboutParagraph({position, imageUrl, title, children} : {position?: string, imageUrl: string, title: string, children: React.ReactNode}) {

    return (
        <div className={"mb-12"}>
            <h1 className="text-2xl font-bold  text-center my-4 clear-both">
                {title}
            </h1>
            <Image src={imageUrl} alt={"Image"} width={300} height={300}
                   className={`rounded-lg mx-auto mb-4  md:mx-4 md:mb-0 ${position === "left" ?"md:float-left" : "md:float-right"}`}/>


                {children}

        </div>
    );
}