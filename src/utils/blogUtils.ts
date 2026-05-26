export type BlogCategory = "Síntomas" | "Diagnósticos" | "Testimonios" | "Vida Académica";

const categoryColorMap: Record<BlogCategory, string> = {
	"Síntomas": "bg-brand-red",      // Rojo para llamar la atención en síntomas
	"Diagnósticos": "bg-brand-blue", // Azul para transmitir confianza y perfil clínico
	"Vida Académica": "bg-brand-green", // Verde para crecimiento y actualización
	"Testimonios": "bg-brand-yellow",   // Amarillo para la calidez de los pacientes
};

/**
 * Returns the Tailwind bg-color class for a given blog category.
 * Used to produce a colored left accent bar on cards.
 */
export function categoryBgColor(category: string): string {
	return categoryColorMap[category as BlogCategory] ?? "bg-brand-blue";
}

export function categoryLabel(category: string): string {
	return category.charAt(0).toUpperCase() + category.slice(1);
}

export function formatDate(date: Date): string {
	// Cambiado a formato en español
	return date.toLocaleDateString("es-MX", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}
