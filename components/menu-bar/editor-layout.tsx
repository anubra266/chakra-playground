import React from "react";

import { MdPhonelink } from "react-icons/md";
import {
  useColorModeValue,
  Tooltip,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverProps,
  PopoverTrigger,
  Icon,
  Stack,
  useBoolean,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import { usePlaygroundContext } from "utils/context";
import { layouts } from "utils/constants";

type EditorLayoutProps = Partial<IconButtonProps> & {
  placement?: PopoverProps["placement"];
};

export const EditorLayout = (props: EditorLayoutProps) => {
  const { placement = "right-start", ...rest } = props;
  const { orientation, setOrientation } = usePlaygroundContext();
  const [isResponsiveMode, setResponsiveMode] = useBoolean();
  const layout = layouts.find((l) => l.key === orientation);
  const bg = useColorModeValue("white", "brand.bg");

  return (
    <>
      <Popover trigger="hover" placement={placement}>
        <PopoverTrigger>
          <IconButton
            isRound
            w="30px"
            size="sm"
            variant="ghost"
            icon={<Icon as={layout?.icon} />}
            title={`Switch Layout - ${layout?.title}`}
            aria-label="Switch Layout"
            {...rest}
          />
        </PopoverTrigger>
        <PopoverContent w="fit-content" bg={bg}>
          <PopoverArrow bg={bg} />
          <PopoverBody>
            <Stack>
              {layouts
                .filter((l) => l.key !== orientation)
                .map(({ key, title, icon }) => (
                  <Tooltip key={key} hasArrow label={title} placement="right">
                    <IconButton
                      isRound
                      w="30px"
                      size="sm"
                      variant="ghost"
                      icon={<Icon as={icon} />}
                      aria-label={title}
                      onClick={() => setOrientation(key)}
                    />
                  </Tooltip>
                ))}
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Tooltip
        hasArrow
        label={`Toggle Responsive Mode - ${isResponsiveMode ? "ON" : "OFF"}`}
        placement="right"
      >
        <IconButton
          isRound
          w="30px"
          size="sm"
          variant={isResponsiveMode ? "solid" : "ghost"}
          colorScheme={isResponsiveMode ? "brand" : "gray"}
          icon={<Icon as={MdPhonelink} />}
          aria-label="Responsive Mode"
          onClick={setResponsiveMode.toggle}
        />
      </Tooltip>
    </>
  );
};
