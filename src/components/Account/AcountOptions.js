import React, { useState, useMemo } from 'react'
import { View } from 'react-native'
import { ListItem, Icon, Text } from 'react-native-elements'
import { map } from 'lodash'
import { Modal } from '../../components'
import  {ChangeDisplayNameForm} from './ChangeDisplayNameForm'

export function AcountOptions(props) {
    const { onReload } = props
    
    const [showModal, setShowModal] = useState(false)
    const [renderModal, setRenderModal] = useState(null);

    const onCloseOpenModal = () => setShowModal(prevState => !prevState)

    const componentMap = {
        displayName: <ChangeDisplayNameForm onClose={onCloseOpenModal} onReload={onReload}/>,
        email: <ChangeDisplayNameForm onClose={onCloseOpenModal }/>,
        password: <ChangeDisplayNameForm onClose={onCloseOpenModal }/>,
    };

    const selectedComponent = (key) => {
        setRenderModal(componentMap[key]);
        onCloseOpenModal();
    };

    const menuOptions = useMemo(() => getMenuOptions(selectedComponent), [selectedComponent]);


  return (
    <View>
      {map(menuOptions, (menu, index) => (
        <ListItem key={index} bottomDivider onPress={menu.onPress}>
          <Icon
            type={menu.iconType}
            name={menu.iconNameLeft}
            color={menu.iconColorLeft}
          />
          <ListItem.Content>
            <ListItem.Title>{menu.title}</ListItem.Title>
          </ListItem.Content>
          <Icon
            type={menu.iconType}
            name={menu.iconNameRight}
            color={menu.iconColorRight}
          />
        </ListItem>
      ))}
      <Modal show={showModal} close={onCloseOpenModal}>
        {renderModal}
      </Modal>
    </View>
  );
}

function getMenuOptions(selectedComponent) {
    const createMenuOption = (title, iconNameLeft, onPressKey) => ({
      title,
      iconType: "material-community",
      iconNameLeft,
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent(onPressKey),
    });

    return [
        createMenuOption("Cambiar Nombres y Apellidos", "account-circle", 'displayName'),
        createMenuOption("Cambiar Email", "at", 'email'),
        createMenuOption("Cambiar Contraseña", "lock-reset", 'password'),
    ];
}