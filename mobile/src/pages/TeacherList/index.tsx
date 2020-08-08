import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import styles from './styles';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isSearchTextVisible, setIsSearchTextVisible] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekday] = useState('');
  const [time, setTime] = useState('');

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response)

        const favoritedTeachersId = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
        });
        setFavorites(favoritedTeachersId);
      }
    });
  }

  function handleToggleFiltersVisible() {
    setIsFilterVisible(!isFilterVisible);
  }

  function handleSwapEmptyToFooter() {
    setIsSearchTextVisible(false);
    setIsFooterVisible(true);
  }

  async function handleFiltersSubmit() {
    loadFavorites();
    handleSwapEmptyToFooter();
    let fixedWeekDay = 0;

    switch (week_day) {
      case 'Domingo':
        break;
      case 'Segunda-feira':
      case 'Segunda':
        fixedWeekDay = 1;
        break;
      case 'Terça-feira':
      case 'Terça':
        fixedWeekDay = 2;
        break;
      case 'Quarta-feira':
      case 'Quarta':
        fixedWeekDay = 3;
        break;
      case 'Quinta-feira':
      case 'Quinta':
        fixedWeekDay = 4;
        break;
      case 'Sexta-feira':
      case 'Sexta':
        fixedWeekDay = 5;
        break;
      case 'Sábado':
        fixedWeekDay = 6;
        break;
      default:
        break;
    }

    const response = await api.get('/classes', {
      params: {
        subject,
        week_day: fixedWeekDay,
        time
      }
    });
    
    setIsFilterVisible(false);
    setTeachers(response.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys Disponíveis"
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={30} color="#04d361" />
          </BorderlessButton>
        )}
      >
        {isFilterVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              placeholder="Qual a matéria ?"
              keyboardAppearance="dark"
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholderTextColor="#c1bccc"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual o dia ?"
                  keyboardAppearance="dark"
                  value={week_day}
                  onChangeText={text => setWeekday(text)}
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual a hora ?"
                  keyboardAppearance="dark"
                  value={time}
                  onChangeText={text => setTime(text)}
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>

            <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        {isSearchTextVisible &&
          <View style={styles.empty}>
            <Text style={styles.emptyText}>
              Faça uma nova busca {' '}
              <Feather name="search" size={16} color="#04d361" />
            </Text>
          </View>
        }

        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          );
        })}

        {teachers.length > 0 && isFooterVisible &&
          <View style={styles.listFooter}>
            <Text style={styles.listFooterText}>
              <Feather name="smile" size={16} color="#04d361" />
              {'  '}Fim da lista {' '}
              <Feather name="smile" size={16} color="#04d361" />
            </Text>
          </View>
        }

        {teachers.length === 0 &&
          <View style={styles.empty}>
            <Text style={styles.emptyText}>
              Nenhum professor encontrado {' '}
              <Feather name="frown" size={16} color="#04d361" />
            </Text>
          </View>
        }
      </ScrollView>
    </View>
  );
}

export default TeacherList;