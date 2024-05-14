import { ReactNode } from "react";
import { toast } from "react-toastify";
import { createNotification } from "./NotificationContent";
import type { NotificationOptions } from "./NotificationContent";
import { NotificationId } from "./types";

export function notify(
  title: string,
  options?: NotificationOptions
): NotificationId;

export function notify(
  title: string,
  body: ReactNode,
  options?: NotificationOptions
): NotificationId;

export function notify(
  title: string,
  bodyOrOptions?: ReactNode | NotificationOptions,
  options?: NotificationOptions
): NotificationId {
  let body: ReactNode | undefined = isReactChild(bodyOrOptions)
    ? bodyOrOptions
    : undefined;
  const safeOptions = isReactChild(bodyOrOptions)
    ? { ...options }
    : bodyOrOptions || {};
  const NotificationContent = createNotification(title, body, safeOptions);
  const internalOptions = {
    ...safeOptions,
    autoClose: safeOptions.duration,
  };
  return toast(NotificationContent, internalOptions as any) as NotificationId;
}

function isReactChild(
  el: ReactNode | NotificationOptions | undefined
): el is ReactNode {
  return (
    el != null &&
    (typeof el === "string" || typeof el === "number" || el["type"])
  );
}

notify.dismiss = (id?: NotificationId) => toast.dismiss(id);
