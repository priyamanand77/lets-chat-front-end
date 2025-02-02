import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import { useEffect } from "react";

import ChatIcon from "/logo/letschatlogo.png"
 
export function CardDefault() {
  return (
//bg-gray-900



  <Card className="flex items-center justify-center bg-dark">
      <CardHeader color="blue-gray" className="relative">
        <img
        className="w-[80%] m-auto"
          src={ChatIcon}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Input color="white" className="rounded-full focus-within:bg-gray-700 " label="Enter your Name" />
        <br/>
        <Input color="white" className="rounded-full  focus-within:bg-gray-700" label="Enter Room-Id" />
      </CardBody>
      <CardFooter className="pt-0 mt-2">
        <Button className="bg-green-700 text-white font-bold py-2 px-4 rounded-full m-2 hover:bg-green-900">Create Room</Button>
        <Button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full m-2 hover:bg-orange-800">Join Room</Button>
      </CardFooter>
    </Card>
  
  );
}