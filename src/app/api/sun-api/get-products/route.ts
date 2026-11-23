import { NextResponse } from "next/server";
import { isAxiosError } from "axios";
import sunWorldApi from "@/axios/sunworldApi";

export async function POST(req: Request) {
  try {
    const { siteCodes, date } = await req.json();

    const { data } = await sunWorldApi.get(`/ota/product/listing`, {
      params: {
        lang: "vi",
        siteCodes,
        date,
        page: 1,
        per_page: 100,
      },
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    if (isAxiosError(error)) {
      // 1. API Sunworld trả về lỗi (4xx, 5xx)
      if (error.response) {
        console.error("Sunworld API error:", {
          status: error.response.status,
          data: error.response.data,
          url: error.config?.url,
          params: error.config?.params,
        });

        return NextResponse.json(
          {
            message: "Sunworld API error",
            details: error.response.data,
          },
          { status: error.response.status }
        );
      }

      // 2. Request đã gửi nhưng không nhận được phản hồi (timeout, mất mạng)
      if (error.request) {
        console.error("No response from Sunworld:", error.code, error.message);
        return NextResponse.json(
          { message: "Sunworld không phản hồi", code: error.code },
          { status: 504 }
        );
      }
    }

    // 3. Lỗi khác (ví dụ req.json() lỗi, bug trong code)
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Internal error" },
      { status: 500 }
    );
  }
}
