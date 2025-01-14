import React from "react"
import { Metadata } from "next"
import { ChatPanel } from "@/components/modules/apps/chat/ChatPanel"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { getAppBySlug } from "@/lib/db/apps"
import { getCurrentSession } from "@/lib/session"
import { v4 as uuidv4 } from 'uuid';
import { getChats } from "@/lib/db/chats"
import { unstable_cache } from "next/cache"
import { CACHE_KEYS } from "@/lib/cache"

export const metadata: Metadata = {
  title: "Create a New Chat",
}

export default async function NewChatPage() {
  const chatId = uuidv4()

  const cookieStore = cookies()
  const supabase = createServerComponentClient({
    cookies: () => cookieStore,
  })
  const session = await getCurrentSession(supabase)
  const currentApp = await getAppBySlug(supabase, '/apps/chat')

  if (!currentApp || !session) {
    return (
      <div className="pt-4">No app found</div>
    )
  }

  const currentProfileId = session.user.id
  const chats = await unstable_cache(
    async () => {
      const data = await getChats(supabase, {
        appId: currentApp.id,
        profileId: currentProfileId,
      })
      return data
    },
    [CACHE_KEYS.CHATS, currentApp.id, currentProfileId],
    {
      revalidate: false,
    }
  )()

  return (
    <ChatPanel chatId={chatId} initialMessages={[]} chats={chats} isNewChat/>
  )
}
