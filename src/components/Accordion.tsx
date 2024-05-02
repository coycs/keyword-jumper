/**
 * @author coycs
 * @description: 手风琴
 * @date 2024-04-28 21:40
 */

import classNames from 'classnames'
import React from 'react'
// 组件
import * as RadixAccordion from '@radix-ui/react-accordion'

// 触发器
const AccordionTrigger = React.forwardRef(({ icon, title, trigger, children, className, ...props }, forwardedRef) => (
  <RadixAccordion.Header className="AccordionHeader flex justify-between items-center py-2 px-4">
    {/* 标题 */}
    <div className="tool-info flex items-center">
      <img className="tool-icon w-4 h-4 mr-2" src={icon} alt={title} />
      <span className="tool-name font-bold text-sm">
        {title}
      </span>
    </div>
    {/* 按钮 */}
    <RadixAccordion.Trigger
      className={classNames('AccordionTrigger', className)}
      {...props}
      ref={forwardedRef}
    >
      {trigger}
    </RadixAccordion.Trigger>
    {children}
  </RadixAccordion.Header>
))

// 内容
const AccordionContent = React.forwardRef(({ content, children, className, ...props }, forwardedRef) => (
  <RadixAccordion.Content
    className={classNames('AccordionContent', className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{content}</div>
    {children}
  </RadixAccordion.Content>
))

export default function Accordion({ items, value }) {
  return (
    <RadixAccordion.Root className="AccordionRoot" type="multiple" value={value}>
      {
        items.map(item => (
          <RadixAccordion.Item className="AccordionItem border-b border-gray-200" value={item.key} key={item.key}>
            <AccordionTrigger icon={item.icon} title={item.title} trigger={item.trigger}>
            </AccordionTrigger>
            <AccordionContent content={item.content}>
            </AccordionContent>
          </RadixAccordion.Item>
        ))
      }
    </RadixAccordion.Root>
  )
}
