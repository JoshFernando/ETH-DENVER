"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const CreateNFTPage = () => {
    const [nftPicFile, setNftPicFile] = useState<File>();
    const [videoOrPhotoFile, setVideoOrPhotoFile] = useState<File>();
    const [audioFile, setAudiofile] = useState<File>();

    const onSubmitNftPic = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!nftPicFile) return;

        try {
            const data = new FormData();
            data.set("file", nftPicFile);

            const res = await fetch("/api/upload", {
                method: "POST",
                body: data,
            });
            // handle the error
            if (!res.ok) throw new Error(await res.text());
        } catch (e: any) {
            // Handle errors here
            console.error(e);
        }
    };
    const onSubmitVideo = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!videoOrPhotoFile) return;

        try {
            const data = new FormData();
            data.set("file", videoOrPhotoFile);

            const res = await fetch("/api/upload", {
                method: "POST",
                body: data,
            });
            // handle the error
            if (!res.ok) throw new Error(await res.text());
        } catch (e: any) {
            // Handle errors here
            console.error(e);
        }
    };
    const onSubmitAudio = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!audioFile) return;

        try {
            const data = new FormData();
            data.set("file", audioFile);

            const res = await fetch("/api/upload", {
                method: "POST",
                body: data,
            });
            // handle the error
            if (!res.ok) throw new Error(await res.text());
        } catch (e: any) {
            // Handle errors here
            console.error(e);
        }
    };
    return (
        <div className="relative w-full h-full bg-transparent">
            <div className="flex w-full bg-transparent">
                <div className="flex flex-col w-2/3 bg-black rounded-3xl mx-auto py-7 px-10">
                    <p className="text-white font-medium text-lg px-5 pb-6">
                        Enter NFT Details
                    </p>

                    <div className="flex flex-col w-full h-0.5 bg-white/25 mb-5"></div>
                    <div className="flex w-full bg-transparent">
                        <div className="flex flex-col w-2/3">
                            <div className="flex mb-5">
                                <div className="flex flex-col w-1/3">
                                    <p className="text-white font-medium text-sm px-5 pb-0">
                                        Name
                                    </p>
                                    <p className="text-[#606060] font-medium text-xs px-5 pb-6">
                                        Enter the Name of the person
                                    </p>
                                </div>
                                <input
                                    type="text"
                                    className="w-2/3 h-14 rounded-xl mx-auto mr-10 border-cyan-300 border-4"
                                />
                            </div>
                            <div className="flex ">
                                <div className="flex flex-col w-1/3">
                                    <p className="text-white font-medium text-sm px-5 pb-0">
                                        Upload Private data
                                    </p>
                                    <p className="text-[#606060] font-medium text-xs px-5 pb-6">
                                        Enter the Private data(journals,
                                        personal documentaries, notes about
                                        experiences) of the person
                                    </p>
                                </div>
                                <textarea className="w-2/3 h-48 rounded-xl mx-auto mr-10 border-cyan-300 border-4" />
                            </div>
                        </div>
                        <div className="flex flex-col w-px h-full bg-white/25"></div>
                        <div className="flex flex-col w-1/3">
                            <div className="flex ">
                                <div className="flex flex-col">
                                    <p className="text-white font-medium text-sm px-5 pb-0">
                                        Upload NFT Picture
                                    </p>
                                    <p className="text-[#606060] font-medium text-xs px-5 pb-2">
                                        Upload the Picture of the NFT
                                    </p>
                                </div>
                            </div>
                            <form
                                onSubmit={onSubmitNftPic}
                                placeholder="hi"
                                className="ml-5 mb-10"
                            >
                                <input
                                    aria-label="Upload NFT Picture"
                                    type="file"
                                    name="file"
                                    onChange={(e) =>
                                        setNftPicFile(e.target.files?.[0])
                                    }
                                    placeholder="Upload NFT Picture"
                                    // style={{
                                    //     border: "2px solid #00FFFF",
                                    //     borderRadius: "10px",
                                    //     width: "80%",
                                    //     height: "40px",

                                    // }}
                                />
                            </form>
                            <div className="flex">
                                <div className="flex flex-col">
                                    <p className="text-white font-medium text-sm px-5 pb-0">
                                        Upload Video/Photo
                                    </p>
                                    <p className="text-[#606060] font-medium text-xs px-5 pb-2">
                                        Upload the Video/Photo of the person
                                    </p>
                                </div>
                            </div>
                            <form
                                onSubmit={onSubmitVideo}
                                placeholder="hi"
                                className="ml-5 mb-2"
                            >
                                <input
                                    aria-label="Upload NFT Picture"
                                    type="file"
                                    name="file"
                                    onChange={(e) =>
                                        setVideoOrPhotoFile(e.target.files?.[0])
                                    }
                                    placeholder="Upload NFT Picture"
                                    // style={{
                                    //     border: "2px solid #00FFFF",
                                    //     borderRadius: "10px",
                                    //     width: "80%",
                                    //     height: "40px",
                                    // }}
                                />
                            </form>
                            <div className="flex flex-col mt-10">
                                <p className="text-white font-medium text-sm px-5 pb-0">
                                    Upload Audio
                                </p>
                                <p className="text-[#606060] font-medium text-xs px-5 pb-2">
                                    Upload the Audio of the person
                                </p>
                            </div>
                            <form
                                onSubmit={onSubmitAudio}
                                placeholder="hi"
                                className="ml-5"
                            >
                                <input
                                    aria-label="Upload NFT Picture"
                                    type="file"
                                    name="file"
                                    onChange={(e) =>
                                        setAudiofile(e.target.files?.[0])
                                    }
                                    placeholder="Upload NFT Picture"
                                    // style={{
                                    //     border: "2px solid #00FFFF",
                                    //     borderRadius: "10px",
                                    //     width: "80%",
                                    //     height: "40px",
                                    // }}
                                />
                            </form>
                        </div>
                    </div>
                    <Button className="mt-16 mb-10 align-middle w-full flex ">
                        <div className="absolute text-[#606060] font-medium text-xs px-7 pb-2 bg-red-600 w-1/3 h-14 rounded-2xl translate-x-2 translate-y-2"></div>
                        <div className="absolute text-red-500 font-bold text-lg px-5  bg-white w-1/3 h-14 rounded-2xl ">
                            <div className="flex items-center justify-center h-full w-full">
                                CREATE NFT
                            </div>
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CreateNFTPage;
