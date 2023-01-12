<template>
  <div>
    <main class="Main bg-primary-yellow relative w-screen h-screen">
      <ModalContainer>
        <ModalHeader title="TRACK LIST" />
        <ModalContent>
          <slot />
        </ModalContent>
      </ModalContainer>
    </main>
  </div>
</template>