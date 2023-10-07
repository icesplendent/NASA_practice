<template>
  <navbar />
  <!-- <div class="relative h-screen w-screen"> -->
  <!-- <div class="h-20"></div> -->
  <div
    id="com"
    class="hidden md:block h-screen w-screen overflow-y-auto overflow-x-hidden pt-24 bg-black"
  >
    <section class="relative my-10 h-fit w-screen">
      <div
        id="title1"
        class="py-5 pl-16 pr-10 absolute top-0 left-0 bg-[#099B9B] w-fit h-fit rounded-r-3xl"
      >
        <h1 class="hidden md:block text-white text-5xl font-jura">
          Why Ocean Matters?
        </h1>
        <h1 class="hidden md:block invisible text-white text-5xl">
          Why Ocean Matter?
        </h1>
        <h1 class="hidden md:block invisible text-white text-5xl">
          Why Ocean Matter?
        </h1>
        <h1 class="md:hidden text-white text-5xl font-jura">Ocean Matters</h1>
        <h1 class="invisible md:hidden text-white text-5xl">Ocean Matters</h1>
        <h1 class="invisible md:hidden text-white text-5xl">Ocean Matters</h1>
      </div>
      <div class="w-full h-24"></div>
      <div class="flex flex-row w-full justify-center z-20">
        <div class="min-w-[4rem] h-full"></div>
        <div id="content1" class="p-20 h-fit bg-white rounded-3xl z-10">
          <p class="text-[#117090] font-jura">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            sapiente nisi, veniam necessitatibus maiores deleniti, vitae
            corrupti voluptates tempore quasi fuga reprehenderit est blanditiis
            aliquid quae illo nam, autem minima molestias! Sequi optio explicabo
            non neque enim cupiditate, id voluptate incidunt, quas perferendis
            dicta perspiciatis iste eaque repellendus? Quae iste distinctio
            alias tempora culpa repellat veniam voluptatum error labore animi
            placeat, quo accusantium. Ex, accusamus! Veniam vero repudiandae
            assumenda corporis. Eius sint pariatur suscipit assumenda quae nisi
            aspernatur delectus. Quia commodi ratione corporis deserunt beatae
            illum? Velit sint libero quia voluptate recusandae qui quis
            veritatis possimus. Fugit eligendi quae voluptatem.
          </p>
        </div>
        <div class="min-w-[4rem] h-full"></div>
      </div>
    </section>
    <section class="relative my-10 h-fit w-screen">
      <div
        id="title2"
        class="py-5 pl-16 pr-10 absolute top-0 left-0 bg-[#099B9B] w-fit h-fit rounded-r-3xl"
      >
        <h1 class="hidden md:block text-white text-5xl font-jura">
          More about ProjectName
        </h1>
        <h1 class="hidden md:block invisible text-white text-5xl">
          More about ProjectName
        </h1>
        <h1 class="hidden md:block invisible text-white text-5xl">
          More about ProjectName
        </h1>
        <h1 class="md:hidden text-white text-5xl font-jura">ProjectName</h1>
        <h1 class="invisible md:hidden text-white text-5xl">ProjectName</h1>
        <h1 class="invisible md:hidden text-white text-5xl">ProjectName</h1>
      </div>
      <div class="w-full h-24"></div>
      <div class="flex flex-row w-full justify-center z-20">
        <div class="min-w-[4rem] h-full"></div>
        <div id="content1" class="p-20 h-fit bg-white rounded-3xl z-10">
          <p class="text-[#117090] font-jura">
            To raise people‘s awareness about how important are ocean and
            phytoplankton in our everyday life, our team integrates solid
            knowledge with interactive games. We depict the marine ecosystem as
            a garden and engage players in a “treasure hunt game” that
            progressively imparts knowledge about ocean, carbon cycle, and
            phytoplankton. Additionally, our team transforms chlorophyll data
            from 2000 to 2022 into a visual 3D Earth, allowing players to
            observe the real-time state of the oceans and phytoplankton while
            playing the game. Through this project, we aim to bridge the
            knowledge gap among the general public and lawmakers regarding
            marine resources.
          </p>
        </div>
        <div class="min-w-[4rem] h-full"></div>
      </div>
    </section>
    <section class="relative my-10 h-fit w-screen">
      <div
        id="title3"
        class="py-5 pl-16 pr-10 absolute top-0 left-0 bg-[#099B9B] w-fit h-fit rounded-r-3xl"
      >
        <h1 class="text-white text-5xl font-jura">Our Team</h1>
        <h1 class="invisible text-white text-5xl">Our Team</h1>
        <h1 class="invisible text-white text-5xl">Our Team</h1>
      </div>
      <div class="w-full h-24"></div>
      <div class="flex flex-row w-full justify-center z-20">
        <div class="min-w-[4rem] h-full"></div>
        <section
          class="overflow-y-auto h-fit bg-white z-20 rounded-3xl"
        >
          <div class="overflow-y-auto py-4 px-4 mx-auto w-full lg:py-6 lg:px-6">
            <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div
                v-for="mate in team"
                :key="mate.name"
                class="items-center bg-gray-50 rounded-lg shadow sm:flex"
              >
                <a href="#" class="p-5">
                  <img
                    class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    :src="mate.img"
                    :alt="mate.name"
                  />
                </a>
                <div class="p-5">
                  <h3
                    class="text-xl font-bold tracking-tight text-gray-900"
                  >
                    <a href="#" class="font-jura">{{ mate.name }}</a>
                  </h3>
                  <span class="text-gray-500">{{
                    mate.dept
                  }}</span>
                  <p
                    class="mt-3 mb-4 font-light text-gray-500 font-jura"
                  >
                    {{ mate.words }}
                  </p>
                  <ul class="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="#"
                        class="text-gray-500 hover:text-gray-900"
                      >
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-gray-500 hover:text-gray-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                          class="w-5 h-5"
                        >
                          <path
                            d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-gray-500 hover:text-gray-900"
                      >
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-gray-500 hover:text-gray-900"
                      >
                        <svg
                          class="p-[1.42px] w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="#121212"
                            d="M105 0h302c57.928.155 104.845 47.072 105 104.996V407c-.155 57.926-47.072 104.844-104.996 104.998L105 512C47.074 511.844.156 464.926.002 407.003L0 105C.156 47.072 47.074.155 104.997 0H105z"
                          />
                          <path
                            fill="#EFEFEF"
                            fill-rule="nonzero"
                            d="M131.188 278.454c-.896-21.723 9.796-38.169 33.505-37.239 19.802.83 27.29 15.408 28.369 33.558l-.02 5.756h-21.821c-25.084 0-23.08-.514-20.356 5.038 2.674 5.295 6.683 7.967 13.211 8.79 5.551.668 11.205-.309 17.374-3.084l2.056-.925 2.416 6.014 2.416 6.014c-5.426 4.686-13.221 6.857-21.126 6.938-19 .194-35.186-10.542-36.024-30.86zm151.173.072c-.896-21.723 9.797-38.169 33.505-37.239 19.802.83 27.291 15.408 28.37 33.558l-.02 5.757h-21.822c-25.084 0-23.08-.514-20.355 5.037 2.673 5.295 6.682 7.968 13.21 8.79 5.552.669 11.206-.308 17.374-3.084l2.056-.925 2.416 6.014 2.416 6.014c-5.426 4.686-13.221 6.857-21.126 6.938-19 .194-35.186-10.542-36.024-30.86zm45.379-10.004c0-1.542-2.108-6.271-3.65-8.122-2.57-3.136-5.14-4.214-9.972-4.163-3.136 0-4.575.257-6.168 1.079-3.598 1.902-6.425 5.86-7.197 10.075l-.359 1.902h13.673c11.668 0 13.673-.103 13.673-.771zm117.92 21.26h16.705v17.477H445.66v-17.477zm-27.501-72.992h17.991v90.983h-17.991V216.79zm-211.779-.103l17.888.258c6.828.104 14.699-.239 22.128 1.127 15.438 2.839 25.9 13.07 24.006 29.905-1.553 13.807-11.528 19.038-15.189 20.782 0 .205 4.934 8.995 11 19.532l10.949 19.225c-2.5.045-16.881.4-17.581.051-.308-.102-4.831-7.967-10.022-17.476l-9.848-17.128c-5.484.749-10.831.37-16.368.37v34.44H206.38v-91.086zm46.006 28.632c-.064-8.421-4.774-12.96-13.222-13.714-5.202-.464-10.591-.442-15.821-.33v27.94c7.186.074 17.557.763 23.687-3.102 3.181-2.006 5.307-5.308 5.356-10.794zM52.172 216.687l20.201.258c13.084.149 27.624-1.283 36.052 6.655 6.787 6.393 9.687 18.376 5.6 26.878-1.356 2.82-3.452 5.498-6.338 8.154l1.439 1.028c2.159 1.131 6.631 5.294 8.328 7.762 4.831 7.042 5.037 19.173.359 27.089-3.083 5.294-9.561 9.715-17.27 11.874-3.65.977-5.45 1.079-26.113 1.285l-22.258.154v-91.137zm42.716 75.922c6.168-2.159 8.43-5.346 8.43-11.823 0-6.117-1.953-9.252-7.197-11.668-2.416-1.131-3.341-1.182-14.752-1.336l-12.234-.206v25.804h11.771c9.253 0 12.234-.154 13.982-.771zm2.416-50.734c-.154-4.884-.823-6.374-3.958-8.482-2.519-1.696-6.014-2.21-15.473-2.21h-8.738v22.72l9.921-.206c9.079-.141 18.669.175 18.248-11.822zm268.065 66.155a21.822 21.822 0 01-8.163-3.761c-9.248-6.87-10.536-20.406-1.526-28.135 1.259-1.079 2.641-2.019 4.034-2.698 4.729-2.365 8.739-3.135 19.379-3.753 12.902-.719 11.823-.359 11.823-4.215-.052-5.551-2.262-8.79-6.939-10.074-4.987-1.389-10.435-.155-13.314 3.032-.977 1.131-1.953 2.622-2.159 3.342l-.309 1.284h-15.832l.309-2.159c.874-5.962 5.346-11.977 11.308-15.163 5.089-2.725 8.723-3.698 16.844-3.698 13.391-.087 22.176 3.694 26.797 16.137l.154 24.828.155 24.776h-16.5v-4.883c0-2.673-.206-4.884-.411-4.884-.258 0-1.183 1.028-2.056 2.211-4.524 6.373-14.959 9.817-23.594 7.813zm16.808-12.697c5.5-1.696 8.739-6.271 8.739-12.336v-3.496h-2.673c-1.491 0-5.346.257-8.481.514-8.945.72-12.44 2.776-12.851 7.556-.565 6.837 6.528 10.435 15.266 7.762zm-205.61-26.883c0-1.543-2.108-6.272-3.65-8.122-2.57-3.136-5.141-4.215-9.972-4.164-3.136 0-4.575.257-6.168 1.08-3.598 1.902-6.425 5.86-7.197 10.075l-.359 1.902h13.673c11.668 0 13.673-.103 13.673-.771z"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="min-w-[4rem] h-full"></div>
      </div>
    </section>
    <section>
      <p class="text-white text-center pt-[3%] pb-[1%] font-jura">Copyright © 2023 OGforOG</p>
    </section>
  </div>
  <div
    id="mobile"
    class="md:hidden h-screen w-screen overflow-y-auto py-12 bg-black"
  >
    <section class="relative my-10 h-fit w-screen">
      <div
        id="title1"
        class="py-5 pl-5 pr-10 absolute top-0 left-0 bg-[#0E2DD1] w-fit h-fit rounded-r-3xl"
      >
        <h1 class="md:hidden text-white text-2xl font-jura">Ocean Matters</h1>
        <h1 class="invisible md:hidden text-white text-2xl">Ocean Matters</h1>
        <h1 class="invisible md:hidden text-white text-2xl">Ocean Matters</h1>
      </div>
      <div class="w-full h-16"></div>
      <div class="flex flex-row w-full justify-center z-20">
        <div class="min-w-[1.5rem] h-full"></div>
        <div id="content1" class="p-8 h-fit bg-white rounded-3xl z-10">
          <p class="text-[#117090] text-xs font-jura">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            sapiente nisi, veniam necessitatibus maiores deleniti, vitae
            corrupti voluptates tempore quasi fuga reprehenderit est blanditiis
            aliquid quae illo nam, autem minima molestias! Sequi optio explicabo
            non neque enim cupiditate, id voluptate incidunt, quas perferendis
            dicta perspiciatis iste eaque repellendus? Quae iste distinctio
            alias tempora culpa repellat veniam voluptatum error labore animi
            placeat, quo accusantium. Ex, accusamus! Veniam vero repudiandae
            assumenda corporis. Eius sint pariatur suscipit assumenda quae nisi
            aspernatur delectus. Quia commodi ratione corporis deserunt beatae
            illum? Velit sint libero quia voluptate recusandae qui quis
            veritatis possimus. Fugit eligendi quae voluptatem.
          </p>
        </div>
        <div class="min-w-[1.5rem] h-full"></div>
      </div>
    </section>
    <section class="relative my-10 h-fit w-screen">
      <div
        id="title1"
        class="py-5 pl-5 pr-10 absolute top-0 left-0 bg-[#0E2DD1] w-fit h-fit rounded-r-3xl"
      >
        <h1 class="md:hidden text-white text-2xl font-jura">ProjectName</h1>
        <h1 class="invisible md:hidden text-white text-2xl">ProjectName</h1>
        <h1 class="invisible md:hidden text-white text-2xl">ProjectName</h1>
      </div>
      <div class="w-full h-16"></div>
      <div class="flex flex-row w-full justify-center z-20">
        <div class="min-w-[1.5rem] h-full"></div>
        <div id="content1" class="p-8 h-fit bg-white rounded-3xl z-10">
          <p class="text-[#117090] text-xs font-jura">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            sapiente nisi, veniam necessitatibus maiores deleniti, vitae
            corrupti voluptates tempore quasi fuga reprehenderit est blanditiis
            aliquid quae illo nam, autem minima molestias! Sequi optio explicabo
            non neque enim cupiditate, id voluptate incidunt, quas perferendis
            dicta perspiciatis iste eaque repellendus? Quae iste distinctio
            alias tempora culpa repellat veniam voluptatum error labore animi
            placeat, quo accusantium. Ex, accusamus! Veniam vero repudiandae
            assumenda corporis. Eius sint pariatur suscipit assumenda quae nisi
            aspernatur delectus. Quia commodi ratione corporis deserunt beatae
            illum? Velit sint libero quia voluptate recusandae qui quis
            veritatis possimus. Fugit eligendi quae voluptatem.
          </p>
        </div>
        <div class="min-w-[1.5rem] h-full"></div>
      </div>
    </section>

    <section class="relative my-10 h-fit w-screen">
      <div
        id="title3"
        class="py-5 pl-5 pr-10 absolute top-0 left-0 bg-[#0E2DD1] w-fit h-fit rounded-r-3xl"
      >
        <h1 class="text-white text-2xl font-jura">Our Team</h1>
        <h1 class="invisible text-white text-2xl">Our Team</h1>
        <h1 class="invisible text-white text-2xl">Our Team</h1>
      </div>
      <div class="w-full h-16"></div>
      <div class="flex flex-row w-full justify-center z-20">
        <div class="min-w-[1.5rem] h-full"></div>
        <section
          class="overflow-y-auto h-fit bg-white z-10 rounded-3xl"
        >
          <div class="overflow-y-auto py-4 px-4 mx-auto w-full lg:py-6 lg:px-6">
            <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div
                v-for="mate in team"
                :key="mate.name"
                class="items-center bg-gray-50 rounded-lg shadow sm:flex"
              >
                <a href="#" class="p-5 flex justify-center">
                  <img
                    class="w-[75%] sm:w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    :src="mate.img"
                    :alt="mate.name"
                  />
                </a>
                <div class="py-5 px-10 sm:px-0 sm:pr-10">
                  <h3
                    class="text-xl font-bold tracking-tight text-gray-900"
                  >
                    <a href="#" class="font-jura">{{ mate.name }}</a>
                  </h3>
                  <span class="text-gray-500">{{
                    mate.dept
                  }}</span>
                  <p
                    class="mt-3 mb-4 font-light text-gray-500 font-jura"
                  >
                    {{ mate.words }}
                  </p>
                  <ul class="flex place-content-between sm:space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="#"
                        class="text-gray-500 hover:text-gray-900"
                      >
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-gray-500 hover:text-gray-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                          class="w-5 h-5"
                        >
                          <path
                            d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-gray-500 hover:text-gray-900"
                      >
                        <svg
                          class="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-gray-500 hover:text-gray-900"
                      >
                        <svg
                          class="p-[1.42px] w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="#121212"
                            d="M105 0h302c57.928.155 104.845 47.072 105 104.996V407c-.155 57.926-47.072 104.844-104.996 104.998L105 512C47.074 511.844.156 464.926.002 407.003L0 105C.156 47.072 47.074.155 104.997 0H105z"
                          />
                          <path
                            fill="#EFEFEF"
                            fill-rule="nonzero"
                            d="M131.188 278.454c-.896-21.723 9.796-38.169 33.505-37.239 19.802.83 27.29 15.408 28.369 33.558l-.02 5.756h-21.821c-25.084 0-23.08-.514-20.356 5.038 2.674 5.295 6.683 7.967 13.211 8.79 5.551.668 11.205-.309 17.374-3.084l2.056-.925 2.416 6.014 2.416 6.014c-5.426 4.686-13.221 6.857-21.126 6.938-19 .194-35.186-10.542-36.024-30.86zm151.173.072c-.896-21.723 9.797-38.169 33.505-37.239 19.802.83 27.291 15.408 28.37 33.558l-.02 5.757h-21.822c-25.084 0-23.08-.514-20.355 5.037 2.673 5.295 6.682 7.968 13.21 8.79 5.552.669 11.206-.308 17.374-3.084l2.056-.925 2.416 6.014 2.416 6.014c-5.426 4.686-13.221 6.857-21.126 6.938-19 .194-35.186-10.542-36.024-30.86zm45.379-10.004c0-1.542-2.108-6.271-3.65-8.122-2.57-3.136-5.14-4.214-9.972-4.163-3.136 0-4.575.257-6.168 1.079-3.598 1.902-6.425 5.86-7.197 10.075l-.359 1.902h13.673c11.668 0 13.673-.103 13.673-.771zm117.92 21.26h16.705v17.477H445.66v-17.477zm-27.501-72.992h17.991v90.983h-17.991V216.79zm-211.779-.103l17.888.258c6.828.104 14.699-.239 22.128 1.127 15.438 2.839 25.9 13.07 24.006 29.905-1.553 13.807-11.528 19.038-15.189 20.782 0 .205 4.934 8.995 11 19.532l10.949 19.225c-2.5.045-16.881.4-17.581.051-.308-.102-4.831-7.967-10.022-17.476l-9.848-17.128c-5.484.749-10.831.37-16.368.37v34.44H206.38v-91.086zm46.006 28.632c-.064-8.421-4.774-12.96-13.222-13.714-5.202-.464-10.591-.442-15.821-.33v27.94c7.186.074 17.557.763 23.687-3.102 3.181-2.006 5.307-5.308 5.356-10.794zM52.172 216.687l20.201.258c13.084.149 27.624-1.283 36.052 6.655 6.787 6.393 9.687 18.376 5.6 26.878-1.356 2.82-3.452 5.498-6.338 8.154l1.439 1.028c2.159 1.131 6.631 5.294 8.328 7.762 4.831 7.042 5.037 19.173.359 27.089-3.083 5.294-9.561 9.715-17.27 11.874-3.65.977-5.45 1.079-26.113 1.285l-22.258.154v-91.137zm42.716 75.922c6.168-2.159 8.43-5.346 8.43-11.823 0-6.117-1.953-9.252-7.197-11.668-2.416-1.131-3.341-1.182-14.752-1.336l-12.234-.206v25.804h11.771c9.253 0 12.234-.154 13.982-.771zm2.416-50.734c-.154-4.884-.823-6.374-3.958-8.482-2.519-1.696-6.014-2.21-15.473-2.21h-8.738v22.72l9.921-.206c9.079-.141 18.669.175 18.248-11.822zm268.065 66.155a21.822 21.822 0 01-8.163-3.761c-9.248-6.87-10.536-20.406-1.526-28.135 1.259-1.079 2.641-2.019 4.034-2.698 4.729-2.365 8.739-3.135 19.379-3.753 12.902-.719 11.823-.359 11.823-4.215-.052-5.551-2.262-8.79-6.939-10.074-4.987-1.389-10.435-.155-13.314 3.032-.977 1.131-1.953 2.622-2.159 3.342l-.309 1.284h-15.832l.309-2.159c.874-5.962 5.346-11.977 11.308-15.163 5.089-2.725 8.723-3.698 16.844-3.698 13.391-.087 22.176 3.694 26.797 16.137l.154 24.828.155 24.776h-16.5v-4.883c0-2.673-.206-4.884-.411-4.884-.258 0-1.183 1.028-2.056 2.211-4.524 6.373-14.959 9.817-23.594 7.813zm16.808-12.697c5.5-1.696 8.739-6.271 8.739-12.336v-3.496h-2.673c-1.491 0-5.346.257-8.481.514-8.945.72-12.44 2.776-12.851 7.556-.565 6.837 6.528 10.435 15.266 7.762zm-205.61-26.883c0-1.543-2.108-6.272-3.65-8.122-2.57-3.136-5.141-4.215-9.972-4.164-3.136 0-4.575.257-6.168 1.08-3.598 1.902-6.425 5.86-7.197 10.075l-.359 1.902h13.673c11.668 0 13.673-.103 13.673-.771z"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="min-w-[1.5rem] h-full"></div>
      </div>
    </section>
    
  </div>
</template>

<script setup>
import navbar from "../components/nav.vue";

const team = [
  {
    name: "Allen",
    img: "/boy.svg",
    dept: "Electrical Engineering",
    words: "let's go ocean garden",
  },
  {
    name: "happy_ying",
    img: "/girl.svg",
    dept: "Computer Science",
    words: "let's go ocean garden",
  },
  {
    name: "yeyuhsin",
    img: "/girl.svg",
    dept: "Economics",
    words: "let's go ocean garden",
  },
  {
    name: "Ruanzhe",
    img: "/boy.svg",
    dept: "Electrical Engineering",
    words: "let's go ocean garden",
  },
  {
    name: "Moinca",
    img: "/girl.svg",
    dept: "Economics",
    words: "let's go ocean garden",
  },
  {
    name: "r1407p",
    img: "/boy.svg",
    dept: "Computer Science",
    words: "let's go ocean garden",
  },
];
</script>

<style lang="scss" scoped></style>
