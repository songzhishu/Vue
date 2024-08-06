import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useChannelStore = defineStore('channel', () => {
    //声明数据
    const channelList = ref([])

    const getList = async () => {
        const { data: { data } } = await axios.get('http://geek.itheima.net/v1_0/channels')

        channelList.value = data.channels
        console.log(data.channels);

    }
    return { channelList, getList }
})
