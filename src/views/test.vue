<template>
    <div>
        <input type="text" v-model="text">

        <div class="sticky top-0">
            <div class=" flex overflow-x-auto category relative bg-white ">
                <RouterLink v-for="item in dataa" :key="item.id" :to="{ hash: `#${item.id}` }"
                    class="p-1 categoryData   ml-2" :id="`category${item.id}`"
                    :class="$router.currentRoute.value.hash === `#${item.id}` ? 'active' : ''">{{ item.id }} uchun
                </RouterLink>

            </div>

        </div>

        <div id="main">
            <div v-for="item in dataa" :key="item.id" :id="`${item.id}`" class=" border">
            <p class="mt-7"> {{ item.text }} </p>
        </div>

        </div>


       







    </div>
</template>
<script setup>
import { ref, watch, nextTick, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const text = ref('')


const dataa = ref([
    {
        id: 1, text: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium unde cum at, sunt repellat nulla doloremque rerum. Totam repellendus nulla, unde vel corrupti expedita doloremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendis est quasi natus aliquid, ipsam quae repellat maiores, obcaecati nulla perferendis saepetempora?Nihil illum possimus impedit unde.Blanditiis nisi labore architecto nemo consequuntur autem debitisperferendis, necessitatibus fugit accusamus consequatur suscipit ea dolorem.At iure earum tempore essedolores eligendi ipsum quos? Quas expedita molestiae deserunt doloremque quisquam ab, incidunt doloreminimaquidem possimus delectus ea necessitatibus quod, dolorem et corporis saepe veniam? Ad veritatis earumvoluptatibus adipisci nesciunt similique unde repudiandae quibusdam officiis et, fugiat libero, voluptatum,stiae porro velit mollitia praesentium cumque? Ratione quidem ullam, consequuntur laboriosam eum,tur adipisci maiores exercitationem dicta quo magnam repellendus a quae facilis quas neque, nemo atque tempora eos ducimus repudiandae.Voluptatum nobis veniam recusandae officia quisquam aliquid corporisid repellat consequatur! Quidem repellendus autem commodi tempora ipsa veniam temporibus! repellat nulla doloremque rerum. Totam repellendus nulla, unde vel corrupti expedita doloremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendis est quasi natus aliquid, ipsam quae repellat maiores, obcaecati nulla perferendis saepetempora?Nihil illum possimus impedit unde.Blanditiis nisi labore architecto nemo consequuntur autem debitisperferendis, necessitatibus fugit accusamus consequatur suscipit ea dolorem.At iure earum tempore essedolores eligendi ipsum quos? Quas expedita molestiae deserunt doloremque quisquam ab, incidunt doloreminimaquidem possimus delectus ea necessitatibus quod, dolorem et corporis saepe veniam? Ad veritatis earumvoluptatibus adipisci nesciunt similique unde repudiandae quibusdam officiis et, fugiat libero, voluptatum,stiae porro velit mollitia praesentium cumque? Ratione quidem ullam, consequuntur laboriosam eum,tur adipisci maiores exercitationem dicta quo magnam repellendus a quae facilis quas neque, nemo atque tempora eos ducimus repudiandae.Voluptatum nobis veniam recusandae officia quisquam aliquid corporisid repellat consequatur! Quidem repellendus autem commodi tempora ipsa veniam temporibus! repellat nulla doloremque rerum. Totam repellendus nulla, unde vel corrupti expedita doloremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendis est quasi natus aliquid, ipsam quae repellat maiores, obcaecati nulla perferendis saepetempora?Nihil illum possimus impedit unde.Blanditiis nisi labore architecto nemo consequuntur autem debitisperferendis, necessitatibus fugit accusamus consequatur suscipit ea dolorem.At iure earum tempore essedolores eligendi ipsum quos? Quas expedita molestiae deserunt doloremque quisquam ab, incidunt doloreminimaquidem possimus delectus ea necessitatibus quod, dolorem et corporis saepe veniam? Ad veritatis earumvoluptatibus adipisci nesciunt similique unde repudiandae quibusdam officiis et, fugiat libero, voluptatum,stiae porro velit mollitia praesentium cumque? Ratione quidem ullam, consequuntur laboriosam eum,tur adipisci maiores exercitationem dicta quo magnam repellendus a quae facilis quas neque, nemo atque tempora eos ducimus repudiandae.Voluptatum nobis veniam recusandae officia quisquam aliquid corporisid repellat consequatur! Quidem repellendus autem commodi tempora ipsa veniam temporibus! repellat nulla doloremque rerum. Totam repellendus nulla, unde vel corrupti expedita doloremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendis est quasi natus aliquid, ipsam quae repellat maiores, obcaecati nulla perferendis saepetempora?Nihil illum possimus impedit unde.Blanditiis nisi labore architecto nemo consequuntur autem debitisperferendis, necessitatibus fugit accusamus consequatur suscipit ea dolorem.At iure earum tempore essedolores eligendi ipsum quos? Quas expedita molestiae deserunt doloremque quisquam ab, incidunt doloreminimaquidem possimus delectus ea necessitatibus quod, dolorem et corporis saepe veniam? Ad veritatis earumvoluptatibus adipisci nesciunt similique unde repudiandae quibusdam officiis et, fugiat libero, voluptatum,stiae porro velit mollitia praesentium cumque? Ratione quidem ullam, consequuntur laboriosam eum,tur adipisci maiores exercitationem dicta quo magnam repellendus a quae facilis quas neque, nemo atque tempora eos ducimus repudiandae.Voluptatum nobis veniam recusandae officia quisquam aliquid corporisid repellat consequatur! Quidem repellendus autem commodi tempora ipsa veniam temporibus! repellat nulla doloremque rerum. Totam repellendus nulla, unde vel corrupti expedita doloremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendis est quasi natus aliquid, ipsam quae repellat maiores, obcaecati nulla perferendis saepetempora?Nihil illum possimus impedit unde.Blanditiis nisi labore architecto nemo consequuntur autem debitisperferendis, necessitatibus fugit accusamus consequatur suscipit ea dolorem.At iure earum tempore essedolores eligendi ipsum quos? Quas expedita molestiae deserunt doloremque quisquam ab, incidunt doloreminimaquidem possimus delectus ea necessitatibus quod, dolorem et corporis saepe veniam? Ad veritatis earumvoluptatibus adipisci nesciunt similique unde repudiandae quibusdam officiis et, fugiat libero, voluptatum,stiae porro velit mollitia praesentium cumque? Ratione quidem ullam, consequuntur laboriosam eum,tur adipisci maiores exercitationem dicta quo magnam repellendus a quae facilis quas neque, nemo atque tempora eos ducimus repudiandae.Voluptatum nobis veniam recusandae officia quisquam aliquid corporisid repellat consequatur! Quidem repellendus autem commodi tempora ipsa veniam temporibus! repellat nulla doloremque rerum. Totam repellendus nulla, unde vel corrupti expedita doloremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendis est quasi natus aliquid, ipsam quae repellat maiores, obcaecati nulla perferendis saepetempora?Nihil illum possimus impedit unde.Blanditiis nisi labore architecto nemo consequuntur autem debitisperferendis, necessitatibus fugit accusamus consequatur suscipit ea dolorem.At iure earum tempore essedolores eligendi ipsum quos? Quas expedita molestiae deserunt doloremque quisquam ab, incidunt doloreminimaquidem possimus delectus ea necessitatibus quod, dolorem et corporis saepe veniam? Ad veritatis earumvoluptatibus adipisci nesciunt similique unde repudiandae quibusdam officiis et, fugiat libero, voluptatum,stiae porro velit mollitia praesentium cumque? Ratione quidem ullam, consequuntur laboriosam eum,tur adipisci maiores exercitationem dicta quo magnam repellendus a quae facilis quas neque, nemo atque tempora eos ducimus repudiandae.Voluptatum nobis veniam recusandae officia quisquam aliquid corporisid repellat consequatur! Quidem repellendus autem commodi tempora ipsa veniam temporibus! repellat nulla doloremque rerum. Totam repellendus nulla, unde vel corrupti expedita doloremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendis est quasi natus aliquid, ipsam quae repellat maiores, obcaecati nulla perferendis saepetempora?Nihil illum possimus impedit unde.Blanditiis nisi labore architecto nemo consequuntur autem debitisperferendis, necessitatibus fugit accusamus consequatur suscipit ea dolorem.At iure earum tempore essedolores eligendi ipsum quos? Quas expedita molestiae deserunt doloremque quisquam ab, incidunt doloreminimaquidem possimus delectus ea necessitatibus quod, dolorem et corporis saepe veniam? Ad veritatis earumvoluptatibus adipisci nesciunt similique unde repudiandae quibusdam officiis et, fugiat libero, voluptatum,stiae porro velit mollitia praesentium cumque? Ratione quidem ullam, consequuntur laboriosam eum,tur adipisci maiores exercitationem dicta quo magnam repellendus a quae facilis quas neque, nemo atque tempora eos ducimus repudiandae.Voluptatum nobis veniam recusandae officia quisquam aliquid corporisid repellat consequatur! Quidem repellendus autem commodi tempora ipsa veniam temporibus! oremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendis est quasi natus aliquid, ipsam quae repellat maiores, obcaecati nulla perferendis saepetempora?Nihil illum possimus impedit unde.Blanditiis nisi labore architecto nemo consequuntur autem debitisperferendis, necessitatibus fugit accusamus consequatur suscipit ea dolorem.At iure earum tempore essedolores eligendi ipsum quos? Quas expedita molestiae deserunt doloremque quisquam ab, incidunt doloreminimaquidem possimus delectus ea necessitatibus quod, dolorem et corporis saepe veniam? Ad veritatis earumvoluptatibus adipisci nesciunt similique unde repudiandae quibusdam officiis et, fugiat libero, voluptatum,stiae porro velit mollitia praesentium cumque? Ratione quidem ullam, consequuntur laboriosam eum,tur adipisci maiores exercitationem dicta quo magnam repellendus a quae facilis quas neque, nemo atque tempora eos ducimus repudiandae.Voluptatum nobis veniam recusandae officia quisquam aliquid corporisid repellat consequatur! Quidem repellendus autem commodi tempora ipsa veniam temporibus! repellat nulla doloremque rerum. Totam repellendus nulla, unde vel corrupti expedita doloremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendisoremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendis est quasi natus aliquid, ipsam quae repellat maiores, obcaecati nulla perferendis saepetempora?Nihil illum possimus impedit unde.Blanditiis nisi labore architecto nemo consequuntur autem debitisperferendis, necessitatibus fugit accusamus consequatur suscipit ea dolorem.At iure earum tempore essedolores eligendi ipsum quos? Quas expedita molestiae deserunt doloremque quisquam ab, incidunt doloreminimaquidem possimus delectus ea necessitatibus quod, dolorem et corporis saepe veniam? Ad veritatis earumvoluptatibus adipisci nesciunt similique unde repudiandae quibusdam officiis et, fugiat libero, voluptatum,stiae porro velit mollitia praesentium cumque? Ratione quidem ullam, consequuntur laboriosam eum,tur adipisci maiores exercitationem dicta quo magnam repellendus a quae facilis quas neque, nemo atque tempora eos ducimus repudiandae.Voluptatum nobis veniam recusandae officia quisquam aliquid corporisid repellat consequatur! Quidem repellendus autem commodi tempora ipsa veniam temporibus! repellat nulla doloremque rerum. Totam repellendus nulla, unde vel corrupti expedita doloremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendisoremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendis est quasi natus aliquid, ipsam quae repellat maiores, obcaecati nulla perferendis saepetempora?Nihil illum possimus impedit unde.Blanditiis nisi labore architecto nemo consequuntur autem debitisperferendis, necessitatibus fugit accusamus consequatur suscipit ea dolorem.At iure earum tempore essedolores eligendi ipsum quos? Quas expedita molestiae deserunt doloremque quisquam ab, incidunt doloreminimaquidem possimus delectus ea necessitatibus quod, dolorem et corporis saepe veniam? Ad veritatis earumvoluptatibus adipisci nesciunt similique unde repudiandae quibusdam officiis et, fugiat libero, voluptatum,stiae porro velit mollitia praesentium cumque? Ratione quidem ullam, consequuntur laboriosam eum,tur adipisci maiores exercitationem dicta quo magnam repellendus a quae facilis quas neque, nemo atque tempora eos ducimus repudiandae.Voluptatum nobis veniam recusandae officia quisquam aliquid corporisid repellat consequatur! Quidem repellendus autem commodi tempora ipsa veniam temporibus! repellat nulla doloremque rerum. Totam repellendus nulla, unde vel corrupti expedita doloremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendisoremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendis est quasi natus aliquid, ipsam quae repellat maiores, obcaecati nulla perferendis saepetempora?Nihil illum possimus impedit unde.Blanditiis nisi labore architecto nemo consequuntur autem debitisperferendis, necessitatibus fugit accusamus consequatur suscipit ea dolorem.At iure earum tempore essedolores eligendi ipsum quos? Quas expedita molestiae deserunt doloremque quisquam ab, incidunt doloreminimaquidem possimus delectus ea necessitatibus quod, dolorem et corporis saepe veniam? Ad veritatis earumvoluptatibus adipisci nesciunt similique unde repudiandae quibusdam officiis et, fugiat libero, voluptatum,stiae porro velit mollitia praesentium cumque? Ratione quidem ullam, consequuntur laboriosam eum,tur adipisci maiores exercitationem dicta quo magnam repellendus a quae facilis quas neque, nemo atque tempora eos ducimus repudiandaeoremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendis est quasi natus aliquid, ipsam quae repellat maiores, obcaecati nulla perferendis saepetempora?Nihil illum possimus impedit unde.Blanditiis nisi labore architecto nemo consequuntur autem debitisperferendis, necessitatibus fugit accusamus consequatur suscipit ea dolorem.At iure earum tempore essedolores eligendi ipsum quos? Quas expedita molestiae deserunt doloremque quisquam ab, incidunt doloreminimaquidem possimus delectus ea necessitatibus quod, dolorem et corporis saepe veniam? Ad veritatis earumvoluptatibus adipisci nesciunt similique unde repudiandae quibusdam officiis et, fugiat libero, voluptatum,stiae porro velit mollitia praesentium cumque? Ratione quidem ullam, consequuntur laboriosam eum,tur adipisci maiores exercitationem dicta quo magnam repellendus a quae facilis quas neque, nemo atque tempora eos ducimus repudiandae.Voluptatum nobis veniam recusandae officia quisquam aliquid corporisid repellat consequatur! Quidem repellendus autem commodi tempora ipsa veniam temporibus! repellat nulla doloremque rerum. Totam repellendus nulla, unde vel corrupti expedita doloremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendis.Voluptatum nobis veniam recusandae officia quisquam aliquid corporisid repellat consequatur! Quidem repellendus autem commodi tempora ipsa veniam temporibus! repellat nulla doloremque rerum. Totam repellendus nulla, unde vel corrupti expedita doloremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendis  "
    },

    {
        id: 2, text: " 2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium unde cum at, sunt repellat nulla doloremque rerum. Totam repellendus nulla, unde vel corrupti expedita doloremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendis est quasi natus aliquid, ipsam quae repellat maiores, obcaecati nulla perferendis saepetempora?Nihil illum possimus impedit unde.Blanditiis nisi labore architecto nemo consequuntur autem debitisperferendis, necessitatibus fugit accusamus consequatur suscipit ea dolorem.At iure earum tempore essedolores eligendi ipsum quos? Quas expedita molestiae deserunt doloremque quisquam ab, incidunt doloreminimaquidem possimus delectus ea necessitatibus quod, dolorem et corporis saepe veniam? Ad veritatis earumvoluptatibus adipisci nesciunt similique unde repudiandae quibusdam officiis et, fugiat libero, voluptatum,stiae porro velit mollitia praesentium cumque? Ratione quidem ullam, consequuntur laboriosam eum,tur adipisci maiores exercitationem dicta quo magnam repellendus a quae facilis quas neque, nemo atque tempora eos ducimus repudiandae.Voluptatum nobis veniam recusandae officia quisquam aliquid corporisid repellat consequatur! Quidem repellendus autem commodi tempora ipsa veniam temporibus!"
    },


    {
        id: 3, text: " 3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium unde cum at, sunt repellat nulla doloremque rerum. Totam repellendus nulla, unde vel corrupti expedita doloremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendis est quasi natus aliquid, ipsam quae repellat maiores, obcaecati nulla perferendis saepetempora?Nihil illum possimus impedit unde.Blanditiis nisi labore architecto nemo consequuntur autem debitisperferendis, necessitatibus fugit accusamus consequatur suscipit ea dolorem.At iure earum tempore essedolores eligendi ipsum quos? Quas expedita molestiae deserunt doloremque quisquam ab, incidunt doloreminimaquidem possimus delectus ea necessitatibus quod, dolorem et corporis saepe veniam? Ad veritatis earumvoluptatibus adipisci nesciunt similique unde repudiandae quibusdam officiis et, fugiat libero, voluptatum,stiae porro velit mollitia praesentium cumque? Ratione quidem ullam, consequuntur laboriosam eum,tur adipisci maiores exercitationem dicta quo magnam repellendus a quae facilis quas neque, nemo atque tempora eos ducimus repudiandae.Voluptatum nobis veniam recusandae officia quisquam aliquid corporisid repellat consequatur! Quidem repellendus autem commodi tempora ipsa veniam temporibus!"
    },
    {
        id: 4, text: " 4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium unde cum at, sunt repellat nulla doloremque rerum. Totam repellendus nulla, unde vel corrupti expedita doloremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendis est quasi natus aliquid, ipsam quae repellat maiores, obcaecati nulla perferendis saepetempora?Nihil illum possimus impedit unde.Blanditiis nisi labore architecto nemo consequuntur autem debitisperferendis, necessitatibus fugit accusamus consequatur suscipit ea dolorem.At iure earum tempore essedolores eligendi ipsum quos? Quas expedita molestiae deserunt doloremque quisquam ab, incidunt doloreminimaquidem possimus delectus ea necessitatibus quod, dolorem et corporis saepe veniam? Ad veritatis earumvoluptatibus adipisci nesciunt similique unde repudiandae quibusdam officiis et, fugiat libero, voluptatum,stiae porro velit mollitia praesentium cumque? Ratione quidem ullam, consequuntur laboriosam eum,tur adipisci maiores exercitationem dicta quo magnam repellendus a quae facilis quas neque, nemo atque tempora eos ducimus repudiandae.Voluptatum nobis veniam recusandae officia quisquam aliquid corporisid repellat consequatur! Quidem repellendus autem commodi tempora ipsa veniam temporibus!"
    },
    {
        id: 5, text: " 5 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium unde cum at, sunt repellat nulla doloremque rerum. Totam repellendus nulla, unde vel corrupti expedita doloremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendis est quasi natus aliquid, ipsam quae repellat maiores, obcaecati nulla perferendis saepetempora?Nihil illum possimus impedit unde.Blanditiis nisi labore architecto nemo consequuntur autem debitisperferendis, necessitatibus fugit accusamus consequatur suscipit ea dolorem.At iure earum tempore essedolores eligendi ipsum quos? Quas expedita molestiae deserunt doloremque quisquam ab, incidunt doloreminimaquidem possimus delectus ea necessitatibus quod, dolorem et corporis saepe veniam? Ad veritatis earumvoluptatibus adipisci nesciunt similique unde repudiandae quibusdam officiis et, fugiat libero, voluptatum,stiae porro velit mollitia praesentium cumque? Ratione quidem ullam, consequuntur laboriosam eum,tur adipisci maiores exercitationem dicta quo magnam repellendus a quae facilis quas neque, nemo atque tempora eos ducimus repudiandae.Voluptatum nobis veniam recusandae officia quisquam aliquid corporisid repellat consequatur! Quidem repellendus autem commodi tempora ipsa veniam temporibus!"
    },
    {
        id: 6, text: " 6 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium unde cum at, sunt repellat nulla doloremque rerum. Totam repellendus nulla, unde vel corrupti expedita doloremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendis est quasi natus aliquid, ipsam quae repellat maiores, obcaecati nulla perferendis saepetempora?Nihil illum possimus impedit unde.Blanditiis nisi labore architecto nemo consequuntur autem debitisperferendis, necessitatibus fugit accusamus consequatur suscipit ea dolorem.At iure earum tempore essedolores eligendi ipsum quos? Quas expedita molestiae deserunt doloremque quisquam ab, incidunt doloreminimaquidem possimus delectus ea necessitatibus quod, dolorem et corporis saepe veniam? Ad veritatis earumvoluptatibus adipisci nesciunt similique unde repudiandae quibusdam officiis et, fugiat libero, voluptatum,stiae porro velit mollitia praesentium cumque? Ratione quidem ullam, consequuntur laboriosam eum,tur adipisci maiores exercitationem dicta quo magnam repellendus a quae facilis quas neque, nemo atque tempora eos ducimus repudiandae.Voluptatum nobis veniam recusandae officia quisquam aliquid corporisid repellat consequatur! Quidem repellendus autem commodi tempora ipsa veniam temporibus!"
    },
    {
        id: 7, text: " 7 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium unde cum at, sunt repellat nulla doloremque rerum. Totam repellendus nulla, unde vel corrupti expedita doloremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendis est quasi natus aliquid, ipsam quae repellat maiores, obcaecati nulla perferendis saepetempora?Nihil illum possimus impedit unde.Blanditiis nisi labore architecto nemo consequuntur autem debitisperferendis, necessitatibus fugit accusamus consequatur suscipit ea dolorem.At iure earum tempore essedolores eligendi ipsum quos? Quas expedita molestiae deserunt doloremque quisquam ab, incidunt doloreminimaquidem possimus delectus ea necessitatibus quod, dolorem et corporis saepe veniam? Ad veritatis earumvoluptatibus adipisci nesciunt similique unde repudiandae quibusdam officiis et, fugiat libero, voluptatum,stiae porro velit mollitia praesentium cumque? Ratione quidem ullam, consequuntur laboriosam eum,tur adipisci maiores exercitationem dicta quo magnam repellendus a quae facilis quas neque, nemo atque tempora eos ducimus repudiandae.Voluptatum nobis veniam recusandae officia quisquam aliquid corporisid repellat consequatur! Quidem repellendus autem commodi tempora ipsa veniam temporibus!"
    },
    {
        id: 8, text: " 8 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium unde cum at, sunt repellat nulla doloremque rerum. Totam repellendus nulla, unde vel corrupti expedita doloremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendis est quasi natus aliquid, ipsam quae repellat maiores, obcaecati nulla perferendis saepetempora?Nihil illum possimus impedit unde.Blanditiis nisi labore architecto nemo consequuntur autem debitisperferendis, necessitatibus fugit accusamus consequatur suscipit ea dolorem.At iure earum tempore essedolores eligendi ipsum quos? Quas expedita molestiae deserunt doloremque quisquam ab, incidunt doloreminimaquidem possimus delectus ea necessitatibus quod, dolorem et corporis saepe veniam? Ad veritatis earumvoluptatibus adipisci nesciunt similique unde repudiandae quibusdam officiis et, fugiat libero, voluptatum,stiae porro velit mollitia praesentium cumque? Ratione quidem ullam, consequuntur laboriosam eum,tur adipisci maiores exercitationem dicta quo magnam repellendus a quae facilis quas neque, nemo atque tempora eos ducimus repudiandae.Voluptatum nobis veniam recusandae officia quisquam aliquid corporisid repellat consequatur! Quidem repellendus autem commodi tempora ipsa veniam temporibus!"
    },
    {
        id: 9, text: "9  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium unde cum at, sunt repellat nulla doloremque rerum. Totam repellendus nulla, unde vel corrupti expedita doloremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendis est quasi natus aliquid, ipsam quae repellat maiores, obcaecati nulla perferendis saepetempora?Nihil illum possimus impedit unde.Blanditiis nisi labore architecto nemo consequuntur autem debitisperferendis, necessitatibus fugit accusamus consequatur suscipit ea dolorem.At iure earum tempore essedolores eligendi ipsum quos? Quas expedita molestiae deserunt doloremque quisquam ab, incidunt doloreminimaquidem possimus delectus ea necessitatibus quod, dolorem et corporis saepe veniam? Ad veritatis earumvoluptatibus adipisci nesciunt similique unde repudiandae quibusdam officiis et, fugiat libero, voluptatum,stiae porro velit mollitia praesentium cumque? Ratione quidem ullam, consequuntur laboriosam eum,tur adipisci maiores exercitationem dicta quo magnam repellendus a quae facilis quas neque, nemo atque tempora eos ducimus repudiandae.Voluptatum nobis veniam recusandae officia quisquam aliquid corporisid repellat consequatur! Quidem repellendus autem commodi tempora ipsa veniam temporibus!"
    },
    {
        id: 10, text: "10  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium unde cum at, sunt repellat nulla doloremque rerum. Totam repellendus nulla, unde vel corrupti expedita doloremque commodi iusto natus maiores   sunt dignissimos obcaecati nam facere eum omnis aliquid! Doloremque voluptates assumenda deserunt   blanditiis dicta repellendus, explicabo quaerat accusantium, nulla quam nesciunt temporibus id nihil et officiisdeleniti veniam officia inventore sed recusandae necessitatibus iusto neque.Amet omnis, expedita in reiciendis est quasi natus aliquid, ipsam quae repellat maiores, obcaecati nulla perferendis saepetempora?Nihil illum possimus impedit unde.Blanditiis nisi labore architecto nemo consequuntur autem debitisperferendis, necessitatibus fugit accusamus consequatur suscipit ea dolorem.At iure earum tempore essedolores eligendi ipsum quos? Quas expedita molestiae deserunt doloremque quisquam ab, incidunt doloreminimaquidem possimus delectus ea necessitatibus quod, dolorem et corporis saepe veniam? Ad veritatis earumvoluptatibus adipisci nesciunt similique unde repudiandae quibusdam officiis et, fugiat libero, voluptatum,stiae porro velit mollitia praesentium cumque? Ratione quidem ullam, consequuntur laboriosam eum,tur adipisci maiores exercitationem dicta quo magnam repellendus a quae facilis quas neque, nemo atque tempora eos ducimus repudiandae.Voluptatum nobis veniam recusandae officia quisquam aliquid corporisid repellat consequatur! Quidem repellendus autem commodi tempora ipsa veniam temporibus!"
    },
])

// Watch for changes in `text` and update the hash in the URL
watch(text, async (newValue) => {
    if (newValue) {
        router.push({ hash: '#' + newValue })
        await nextTick() // Wait for DOM updates to complete

        const container = document.getElementById('main')
        const element = document.getElementById(newValue)
        // if (element) {

        //     element.scrollIntoView({ behavior: 'smooth', block: 'center' })

        // }

        if (container && element) {
            container.scrollTop = element.offsetTop - container.offsetTop
        }
    }
})

// Watch for route changes to scroll to the element with the corresponding ID
// watch(() => route.hash, async (newHash) => {
//     await nextTick() // Wait for DOM updates to complete

//     const id = newHash.slice(1) // Remove the '#' from the hash
//     const container = document.getElementById('main')
//     const element = document.getElementById(id)

//     if (container && element) {
//         container.scrollTop = element.offsetTop - container.offsetTop
//     }
// })



const updateActiveCategoryOnScroll = () => {
    const elements = document.body.querySelectorAll('[id]'); // id atributiga ega bo'lgan barcha elementlarni tanlab olamiz

    const offset = window.innerHeight / 2;

    let currentActiveId = null;

    elements.forEach(element => {

        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < offset) {

            currentActiveId = element.getAttribute('id'); // ID ni oling, `parseInt` kerak emas agar ID son bo'lmasa
        }
    });

    if (currentActiveId !== null) {
        text.value = currentActiveId; // Topilgan ID ni o'zgartiramiz
    }
};


// const updateActiveCategoryOnScroll = () => {
//     const elements = document.querySelectorAll('[id]'); // IDga ega barcha elementlarni tanlash

//     let currentActiveId = null;

//     elements.forEach(element => {
//         const rect = element.getBoundingClientRect();
//         const offset = window.innerHeight / 2;

//         // Elementning pastki qismi ekranning yuqori qismiga yetib borganini tekshirish
//         if (rect.bottom >= offset && rect.bottom <= window.innerHeight) {
//             currentActiveId = element.getAttribute('id');
//         }
//     });

//     if (currentActiveId !== null) {
//         text.value = currentActiveId;
//     }
// };

// Scroll voqeasini tinglash
// window.addEventListener('scroll', updateActiveCategoryOnScroll);


const categoryScroll = (id) => {
    const elementId = 'category' + id

    const element = document.getElementById(elementId)
    console.log(element);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });

    }


}


onMounted(() => {



    // dataa.value.forEach((item) => {
    //     const element = document.getElementById(item.id);
    //     if (element) {
    //         observer.observe(element);
    //     } else {
    //         console.warn(`Element with ID ${item.id} not found`);
    //     }
    // });
    window.addEventListener('scroll', () => {
        updateActiveCategoryOnScroll()
        // categoryScroll(text.value)


    });





})
</script>





<style scoped>
.categoryData {
    min-width: 105px !important;
    border-radius: 5px;
    transition: all 0.2s;
    /* scroll-behavior: smooth; */
}

.category::-webkit-scrollbar {
    display: none;
}

.category {

    /* scroll-behavior: smooth; */
    transition: all 0.5s;


}

.active {
    background-color: #6A984D;
    border-radius: 5px;
    color: #fff;

}

.activeProduct {
    margin-top: 30px;
}
</style>
