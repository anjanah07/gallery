"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import type { ElementRef } from "react";
import { createPortal } from "react-dom";
const Modal = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) dialogRef.current?.showModal();
  }, []);
  const onDismiss = () => {
    router.back();
  };
  return createPortal(
    <dialog
      ref={dialogRef}
      className="m-0 h-screen w-screen bg-black/80 text-white"
      onClose={onDismiss}
      onDoubleClick={onDismiss}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root")!,
  );
};
export default Modal;
