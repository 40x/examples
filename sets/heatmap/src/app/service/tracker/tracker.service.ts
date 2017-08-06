import {Injectable} from '@angular/core';

@Injectable()
export class TrackerService {

    worker: any;

    constructor() {
        this.setupTracker();
    }

    setupTracker () {
        this.worker = new Worker('src/app/utils/tracker.js');
    }

    addEvent(key: string, event: any, customValue ?: string) {
        this.worker.postMessage({
            key: key,
            user: 'user_id_here',
            event: {
                pageX: event.pageX,
                pageY: event.pageY
            },
            customValue : customValue
        });
    }


}