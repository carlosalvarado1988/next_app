import Image from "next/image";
import Coffee from "@/public/images/coffe-home.jpg";

export default function ImagePage() {
  return (
    <div>
      <Image src={Coffee} alt="local-img" className="mb-3" />
      <div className="relative h-screen">
        <Image
          src="https://bit.ly/react-cover"
          alt="remote-img"
          // width={300} this for arbitrary measurements
          // height={170}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
