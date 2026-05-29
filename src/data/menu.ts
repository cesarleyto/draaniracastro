import type { MenuItem } from "@/types";

export const MainMenu: MenuItem[] = [
    {
        label: "Gastro Pediatra",
        href: "/",
        hoverClass: "hover:text-brand-blue",
        activeClass: "text-brand-blue",
    },
    {
        label: "Mi Formación",
        href: "/#formacion",
        hoverClass: "hover:text-brand-red",
        activeClass: "text-brand-red",
    },
    {
        label: "Blog",
        href: "/blog",
        hoverClass: "hover:text-brand-green",
        activeClass: "text-brand-green",
    },
{
        label: "Agendar Cita",
        href: "/#contacto", // Cambiado aquí
        hoverClass: "hover:text-brand-yellow",
        activeClass: "text-brand-yellow",
    },
];