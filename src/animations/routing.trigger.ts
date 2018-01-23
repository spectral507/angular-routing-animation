import {
    animate, animation, AnimationTriggerMetadata, group, query, state,
    style, transition, trigger, useAnimation
} from '@angular/animations';

const commonStyles = {
    position: 'absolute',
    width: '100%'
};

const slideRightAnimation = animation([
    query(':leave', [
        style([commonStyles, { transform: 'translateX(0%)' }])
    ], { optional: true }),
    query(':enter', [
        style([commonStyles, { transform: 'translateX(-200%)' }])
    ], { optional: true }),
    group([
        query(':leave', [
            animate('600ms ease-out',
                style({ transform: 'translateX(200%)' })
            )
        ], { optional: true }),
        query(':enter', [
            animate('600ms ease-out',
                style({ transform: 'translateX(0%)' }))
        ], { optional: true })
    ])
]);

const slideLeftAnimation = animation([
    query(':leave', [
        style([commonStyles, { transform: 'translateX(0%)' }])
    ], { optional: true }),
    query(':enter', [
        style([commonStyles, { transform: 'translateX(200%)' }])
    ], { optional: true }),
    group([
        query(':leave', [
            animate('600ms ease-out',
                style({ transform: 'translateX(-200%)' })
            )
        ], { optional: true }),
        query(':enter', [
            animate('600ms ease-out',
                style({ transform: 'translateX(0%)' }))
        ], { optional: true })
    ])
]);

const fadeAnimation = animation([
    query(':leave', [
        style([commonStyles, { opacity: 1 }])
    ], { optional: true }),
    query(':enter', [
        style([commonStyles, { opacity: 0 }])
    ], { optional: true }),
    query(':leave', [
        animate('300ms ease-out',
            style({ opacity: 0 }))
    ], { optional: true }),
    query(':enter', [
        animate('300ms ease-out',
            style({ opacity: 1 }))
    ], { optional: true })
]);

export function getRoutingTrigger(): AnimationTriggerMetadata {
    return trigger('routing', [
        transition('home => left, right => home', [useAnimation(slideRightAnimation)]),
        transition('home => right, left => home', [useAnimation(slideLeftAnimation)]),
        transition('* <=> *', [useAnimation(fadeAnimation)])
    ]);
};