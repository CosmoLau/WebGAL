import styles from '@/Components/UI/Menu/Options/options.module.scss';
import { NormalOption } from '@/Components/UI/Menu/Options/NormalOption';
import { OptionSlider } from '@/Components/UI/Menu/Options/OptionSlider';
import { setOptionData } from '@/store/userDataReducer';
import { setStorage } from '@/Core/controller/storage/storageController';
import { setVolume } from '@/Core/controller/stage/setVolume';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import useTrans from '@/hooks/useTrans';

export function Sound() {
  const userDataState = useSelector((state: RootState) => state.userData);
  const dispatch = useDispatch();
  const t = useTrans('menu.options.pages.sound.options.');

  return (
    <div className={styles.Options_main_content_half}>
      <NormalOption key="option4" title={t('volumeMain.title')}>
        <OptionSlider
          initValue={userDataState.optionData.volumeMain}
          uniqueID={t('volumeMain.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'volumeMain', value: Number(newValue) }));
            setStorage();
            setVolume();
          }}
        />
      </NormalOption>
      <NormalOption key="option5" title={t('vocalVolume.title')}>
        <OptionSlider
          initValue={userDataState.optionData.vocalVolume}
          uniqueID={t('vocalVolume.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'vocalVolume', value: Number(newValue) }));
            setStorage();
            setVolume();
          }}
        />
      </NormalOption>
      <NormalOption key="option6" title={t('bgmVolume.title')}>
        <OptionSlider
          initValue={userDataState.optionData.bgmVolume}
          uniqueID={t('bgmVolume.title')}
          onChange={(event) => {
            const newValue = event.target.value;
            dispatch(setOptionData({ key: 'bgmVolume', value: Number(newValue) }));
            setStorage();
            setVolume();
          }}
        />
      </NormalOption>
    </div>
  );
}