import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500">
      <div
        className="h-[80vh] bg-white text-opacity-90 shadow-2xl
       w-[90vw] md:w-[75vw] lg:w-[60vw] xl:w-[50vw] rounded-3xl grid xl:grid-cols-2 overflow-hidden"
      >
        <div className="flex flex-col gap-10 items-center justify-center p-10 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome</h1>
            <p className="font-medium text-lg">
              Fill in the details to get started with the best chat app!
            </p>
          </div>
          <img
            src="/src/assets/victory.svg"
            alt="victory"
            className="h-[100px] w-[100px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center p-8">
          <Tabs className="w-full">
            <TabsList className="flex w-full justify-between bg-transparent">
              <TabsTrigger
                value="Login"
                className="w-full text-center text-lg font-semibold p-4 transition-all duration-300 border-b-2 border-transparent data-[state=active]:border-purple-500 data-[state=active]:text-purple-500"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="Signin"
                className="w-full text-center text-lg font-semibold p-4 transition-all duration-300 border-b-2 border-transparent data-[state=active]:border-purple-500 data-[state=active]:text-purple-500"
              >
                SignUp
              </TabsTrigger>
            </TabsList>

            <TabsContent
              className="flex flex-col gap-5 mt-10 p-6"
              value="Login"
            >
              <Input
                placeholder="Email"
                type="email"
                className="rounded-full p-4 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Password"
                type="password"
                className="rounded-full p-4 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="w-full py-3 mt-6 bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:bg-purple-600 transition-all duration-300">
                Log In
              </button>
            </TabsContent>

            <TabsContent
              className="flex flex-col gap-5 mt-10 p-6"
              value="Signin"
            >
              <Input
                placeholder="Email"
                type="email"
                className="rounded-full p-4 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Password"
                type="password"
                className="rounded-full p-4 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                placeholder="Confirm Password"
                type="password"
                className="rounded-full p-4 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={confirmpassword}
                onChange={(e) => setConfirmpassword(e.target.value)}
              />
              <button className="w-full py-3 mt-6 bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:bg-purple-600 transition-all duration-300">
                Sign Up
              </button>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Auth;
//////
// import { Input } from "@/components/ui/input";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { useState } from "react";
// import { useActionData } from "react-router-dom";

// const Auth = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmpassword, setConfirmpassword] = useState("");
//   return (
//     <div className="h-[100vh] w-[100vw]  flex items-center justify-center">
//       <div
//         className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl
//        w-[80vw] md:w-[90vw] lg:w-[90vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2"
//       >
//         <div className="flex flex-col gap-10 items-center justify-center">
//           <div className=" flex items-center justify-center flex-col">
//             <div className="flex items-center justify-center">
//               <h1 className="text-5xl font-bold md:text-5xl justify-center">
//                 Welcome
//               </h1>
//               <img
//                 src="\src\assets\victory.svg"
//                 alt="victory"
//                 className="h-[80px]"
//               />
//             </div>
//             <p className="font-medium text-center">
//               Fill in the details to get started with best chat app!
//             </p>
//           </div>
//           <div className="flex items-center justify-center w-full">
//             <Tabs className="w-3/4">
//               <TabsList className="bg-transparent rounded-none w-full">
//                 <TabsTrigger
//                   value="Login"
//                   className="data-[state=active]:bg-transparent text-black
//                 text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold
//                 data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
//                 >
//                   Login
//                 </TabsTrigger>
//                 <TabsTrigger
//                   value="Signin"
//                   className="data-[state=active]:bg-transparent text-black
//                 text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold
//                 data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
//                 >
//                   Signin
//                 </TabsTrigger>
//                 <TabsContent className="flex flex-col gap-5 mt-10 p-6 bg-white shadow-md rounded-lg" value="Login">
//   <Input
//     placeholder="Email"
//     type="email"
//     className="rounded-full p-3 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//     value={email}
//     onChange={(e) => setEmail(e.target.value)}
//   />
//                   <Input
//                     placeholder="password"
//                     type="Password"
//                     className="rounded-full p-0"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </TabsContent>
//                 <TabsContent value="Signin"></TabsContent>
//               </TabsList>
//             </Tabs>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;
// give  me the proper styling 
