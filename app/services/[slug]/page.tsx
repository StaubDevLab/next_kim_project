
import ServiceUniqueComponent from "@/app/_components/services/ServiceUniqueComponent";



export default function ServicesPage({params}: { params: { slug: string } }) {
    const slug = params.slug


    return (

            <div className=" flex flex-col justify-center items-center py-3 px-4">


                <ServiceUniqueComponent slug={slug}/>

            </div>

    );
}