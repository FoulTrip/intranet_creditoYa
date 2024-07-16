import TokenService from "@/classes/TokenServices";
import UserServices from "@/classes/UserServices";
import { ScalarUser } from "@/types/session";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {

    // // Verificar la autenticación JWT
    // const authorizationHeader = req.headers.get("Authorization");

    // if (!authorizationHeader) {
    //   throw new Error("Token de autorización no proporcionado");
    // }

    // const token = authorizationHeader.split(" ")[1];

    // const decodedToken = TokenService.verifyToken(
    //   token,
    //   process.env.JWT_SECRET as string
    // );

    // if (!decodedToken) {
    //   throw new Error("Token no válido");
    // }

    const { name, lastNames, email, password, rol }: ScalarUser = await req.json();

    if (!email) throw new Error("email is required");
    if (!password) throw new Error("Psassword is required");

    const data: ScalarUser = {
      name,
      lastNames,
      email,
      password,
      rol
    };

    const user = await UserServices.fastCreate(data);

    return NextResponse.json({ success: true, data: user });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message });
    }
  }
}
