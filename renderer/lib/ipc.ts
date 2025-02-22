import { ipcRenderer } from 'electron'
import { Preload } from '../../main/preload'

export default {

    // on(channel:string, listener){
    //     ipcRenderer.on(channel, listener)
    // },

    send(channel:string, action:string, data = {}):Promise<any> {
        // return new Promise((resolve, reject) => {
        //     const requestId = Math.round(Math.random()*1000);

        //     ipcRenderer.send(channel, {
        //         id: requestId,
        //         action: action,
        //         data: data
        //     })

        //     // Wait for event back..
        //     const callbackFunction = (event, args) => {
        //         if(args.action === action && args.id === requestId){
        //             ipcRenderer.removeListener(channel, callbackFunction)
        //             resolve(args.data)
        //         }
        //     }

        //     ipcRenderer.on(channel, callbackFunction)

        // })
        return window.Greenlight.send(channel, action, data)
    },

    on(channel:string, listener):Function {

        // const wrapEvent = (event, args) => {
        //     listener(event, args.action, args.data)
        // }

        // ipcRenderer.on(channel, wrapEvent)

        // return wrapEvent
        return window.Greenlight.on(channel, listener)
    }, 

    onAction(channel:string, action:string, listener):Function {

        // const wrapEvent = (event, args) => {
        //     if(args.action === action){
        //         listener(event, args.data)
        //     }
        // }

        // ipcRenderer.on(channel, wrapEvent)

        // return wrapEvent
        return window.Greenlight.onAction(channel, action, listener)
    },

    removeListener(channel:string, listener):void {
        // ipcRenderer.removeListener(channel, listener)
        return window.Greenlight.removeListener(channel, listener)
    }
}