"use server"
import db from "@/db/drizzle"
import { heroPhotos, members } from "@/db/schema"
import { eq } from "drizzle-orm";

export const getAllmembersData = async () => {
    const membersData = await db.select().from(members)
    return membersData;
}

export const getExectiveBodyMembersData = async (count: number) => {
    /// select members where groupMember = "ExativeBodyMember" limit count; 
    const membersData = await db.select().from(members).where(eq(members.groupMember, "ExativeBodyMember")).limit(count)
    return membersData;
}

export const fetchHeroImages = async () => {
    const heroImages = await db.select().from(heroPhotos)
    return heroImages;
}