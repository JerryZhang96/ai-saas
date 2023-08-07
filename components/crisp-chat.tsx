"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("a1514139-23ee-4c70-ad7d-2acedc45a659")
  }, [])

  return null
}
