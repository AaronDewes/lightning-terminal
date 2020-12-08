/* eslint-disable react/display-name */
/* eslint-disable typescript-eslint/ban-ts-comment */
import React from 'react';
import Tour, { ReactourStep } from 'reactour';
import { observer } from 'mobx-react-lite';
import { useTheme } from '@emotion/react';
import { useStore } from 'store';
import { styled, Theme } from 'components/theme';
import ChannelListStep from './ChannelListStep';
import LoopInfoStep from './LoopInfoStep';
import NodeStatusStep from './NodeStatusStep';
import SuccessStep from './SuccessStep';
import { createTextStep } from './TextStep';
import WelcomeStep from './WelcomeStep';

const tourSteps: ReactourStep[] = [
  {
    content: p => <WelcomeStep {...p} />,
    style: { maxWidth: 900 },
  },
  {
    content: p => <LoopInfoStep {...p} />,
    style: { maxWidth: 900 },
  },
  {
    selector: '[data-tour="node-status"]',
    content: p => <NodeStatusStep {...p} />,
  },
  {
    selector: '[data-tour="history"]',
    content: createTextStep('history'),
    stepInteraction: false,
  },
  {
    selector: '[data-tour="inbound"]',
    content: createTextStep('inbound'),
  },
  {
    selector: '[data-tour="outbound"]',
    content: createTextStep('outbound'),
  },
  {
    selector: '[data-tour="channel-list"]',
    content: p => <ChannelListStep {...p} />,
    style: { maxWidth: 600 },
  },
  {
    selector: '[data-tour="channel-list-receive"]',
    content: createTextStep('channelListReceive'),
  },
  {
    selector: '[data-tour="channel-list-send"]',
    content: createTextStep('channelListSend'),
  },
  {
    selector: '[data-tour="channel-list-fee"]',
    content: createTextStep('channelListFee'),
  },
  {
    selector: '[data-tour="channel-list-uptime"]',
    content: createTextStep('channelListUptime'),
  },
  {
    selector: '[data-tour="channel-list-peer"]',
    content: createTextStep('channelListPeer'),
  },
  {
    selector: '[data-tour="channel-list-capacity"]',
    content: createTextStep('channelListCapacity'),
  },
  {
    selector: '[data-tour="export"]',
    content: createTextStep('export'),
  },
  {
    selector: '[data-tour="loop"]',
    content: createTextStep('loop', false),
    style: { maxWidth: 500 },
  },
  {
    selector: '[data-tour="loop-actions"]',
    content: createTextStep('loopActions'),
    style: { maxWidth: 500 },
    stepInteraction: false,
  },
  {
    selector: '[data-tour="channel-list"]',
    content: createTextStep('channelListSelect'),
    style: { maxWidth: 800 },
  },
  {
    selector: '[data-tour="loop-out"]',
    content: createTextStep('loopOut', false),
  },
  {
    selector: '[data-tour="loop-amount"]',
    content: createTextStep('loopAmount', false),
  },
  {
    selector: '[data-tour="loop-review"]',
    content: createTextStep('loopReview', false),
    style: { maxWidth: 500 },
  },
  {
    selector: '[data-tour="loop-progress"]',
    content: createTextStep('loopProgress', false),
    style: { maxWidth: 500 },
  },
  {
    selector: '[data-tour="processing-swaps"]',
    content: createTextStep('processingSwaps'),
    style: { maxWidth: 500 },
  },
  {
    selector: '[data-tour="swap-progress"]',
    content: createTextStep('swapProgress'),
  },
  {
    content: p => <SuccessStep {...p} />,
    style: { maxWidth: 900 },
  },
];

const Styled = {
  Tour: styled(Tour)`
    &.reactour__helper {
      border-radius: 10px;
    }

    [data-tour-elem='badge'] {
      font-family: ${props => props.theme.fonts.open.regular};
      font-size: ${props => props.theme.sizes.xxs};
    }
  `,
};

const TourHost: React.FC = () => {
  const { uiStore } = useStore();
  const theme = useTheme();

  const { Tour } = Styled;
  return (
    <Tour
      steps={tourSteps}
      isOpen={uiStore.tourVisible}
      onRequestClose={uiStore.closeTour}
      // @ts-ignore: Property 'colors' does not exist on type 'Theme'.
      accentColor={theme.colors.pink}
      goToStep={uiStore.tourActiveStep}
      getCurrentStep={uiStore.setTourActiveStep}
      showNavigation={false}
      showButtons={false}
      closeWithMask={false}
      disableKeyboardNavigation={true}
      badgeContent={(curr, tot) => `${curr} of ${tot}`}
      startAt={0}
    />
  );
};

export default observer(TourHost);
