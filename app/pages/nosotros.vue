<template>
  <div>
    <UPageHero title="Nosotros" description="Conoce más sobre nuestro equipo y misión" />

    <UPageSection
      id="about"
      title="Quiénes somos"
      description="Somos un equipo dedicado a crear experiencias web excepcionales usando las mejores tecnologías modernas."
      :features="[
        {
          icon: 'i-lucide-target',
          title: 'Nuestra misión',
          description:
            'Crear soluciones web innovadoras y de alta calidad que impacten positivamente a nuestros usuarios.'
        },
        {
          icon: 'i-lucide-users',
          title: 'Nuestro equipo',
          description:
            'Un grupo talentoso de desarrolladores y diseñadores apasionados por la excelencia.'
        },
        {
          icon: 'i-lucide-heart',
          title: 'Nuestros valores',
          description:
            'Calidad, innovación, colaboración y sostenibilidad son el core de nuestro trabajo.'
        }
      ]"
    />
  </div>
</template>
