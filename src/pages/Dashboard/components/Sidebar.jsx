import { Box, Center, Divider, Flex, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FiActivity, FiBook, FiCheckCircle, FiCompass, FiHome, FiList } from "react-icons/fi";
import { TbArrowsExchange } from "react-icons/tb";
import { useLocation, useNavigate } from 'react-router-dom';

export function Sidebar() {
    const [activeItem, setActiveItem] = useState("/");
    const location = useLocation();
    const items = [
        {
            id: "/", label: "Home", icon: <FiHome size={18} />
        },
        {
            id: "/transactions", label: "Transactions", icon: <TbArrowsExchange size={18} />
        },
        {
            id: "/categories", label: "Categories", icon: <FiList size={18} />
        },
        // {
        //     id: "/planning", label: "Planning", icon: <FiCompass size={18} />
        // },
        // {
        //     id: "/receipt", label: "Receipt", icon: <FiBook size={18} />
        // },
    ];
    useEffect(() => {
        setActiveItem(location.pathname)
    }, [location]);
    const navigate = useNavigate();
    const sidebarWidth = 200
    return (
        <Flex width={sidebarWidth} position="relative">
            <Box width={sidebarWidth} height="100vh" position="fixed" top="0" left="0" background="white" zIndex={'901'}>
                <VStack padding={2} spacing={0}>
                    <Text fontFamily={"Ubuntu"} fontWeight="500" color="grey.600" fontSize={"lg"} mb={5} mt={5}>
                        mooni
                    </Text>
                </VStack>
                {/* <Divider /> */}
                <VStack padding={2} spacing={0} pt={10}>
                    {items.map(i => (
                        <Flex alignItems={"center"}
                            borderRadius="md"
                            justifyContent={"start"}
                            width={"100%"}
                            fontFamily={"'Ubuntu'"}
                            px={3} py={2} cursor={"pointer"}
                            transition={'.2s all ease-in-out'}
                            onClick={() => {
                                setActiveItem(i.id)
                                navigate(i.id)
                            }}
                            color={activeItem === i.id ? "orange.500" : "gray.500"}
                            _hover={{
                                color: "orange.500",
                            }}>
                            <Center p={2} background={activeItem === i.id ? "orange.100" : "transparent"} borderRadius="md">

                                {i.icon}
                            </Center>
                            <Text fontSize={"sm"}
                                fontWeight={500} ml={2}>
                                {i.label}
                            </Text>
                        </Flex>
                    ))}
                </VStack>
            </Box>
            <Divider orientation='vertical' position={"fixed"} top="0px" left={sidebarWidth} zIndex={"903"} />
        </Flex>

    )
}
