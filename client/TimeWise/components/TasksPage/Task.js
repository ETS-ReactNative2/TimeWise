import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import Tag from '../Misc/Tag';
import styles from '../../styles';
import TaskOverviewModal from '../TaskOverview/TaskOverviewModal';

const Task = props => {
  const { type, location, day, time, name } = props.task;

  const [visible, toggleVisible] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => toggleVisible(true)}>
      <View style={styles.task}>
        <View style={styles.row}>
          <CheckBox uncheckedIcon="circle-o" />
          <View>
            <Text style={styles.mediumText}>{name}</Text>
            <View style={styles.row}>
              <Icon name="clock-o" color="#8BC34A" size={18}></Icon>
              <Text style={(styles.text, { color: '#8BC34A' })}> {time}</Text>
            </View>
          </View>
        </View>
        {type === 'class' ? <Tag type="class"></Tag> : <Tag></Tag>}
        <TaskOverviewModal
          visible={visible}
          closeModal={() => toggleVisible(false)}
        ></TaskOverviewModal>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Task;
