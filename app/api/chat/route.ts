import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import OpenAI from "openai";

export async function POST(request: NextRequest) {
    console.log("Sending POST request to Together API");

    const client = new OpenAI({
        apiKey: "9aa4e2db5e8a6fa154a066ce5a64b0514af8c923a7b87af8d54e54f7a03f368f",
        baseURL: "https://api.together.xyz/v1",
    });

    const { messages } = await request.json();

    const chatCompletion = await client.chat.completions.create({
        model: "Qwen/Qwen1.5-72B-Chat",
        messages,
        temperature: 0.7,
        max_tokens: 1024,
    });

    console.log(
        `Together AI reply ${chatCompletion.choices[0].message.content}`
    );

    return NextResponse.json(
        {
            cookies: request.cookies.getAll(),
            reply: {
                role: "assistant",
                content: chatCompletion.choices[0].message.content,
            },
        },
        {
            status: 200,
        }
    );
}
